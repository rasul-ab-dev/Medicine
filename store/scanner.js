import { alert } from "devextreme/ui/dialog";
const currentDevice = JSON.parse(localStorage.getItem("currentDevice")) || {
  mode: null,
  size: null,
  dpi: null
};
const deviceParamsByCurrentDevice = JSON.parse(
  localStorage.getItem(`deviceParamsBy/${currentDevice?.name}`)
);
const writeParamsByCurrentDevice = (params, currentDeviceName) => {
  JSON.stringify(params);
  localStorage.setItem(
    `deviceParamsBy/${currentDeviceName}`,
    JSON.stringify(params)
  );
};
const setDefaultParams = ({ state, commit }, defaultParams) => {

  if (!state.params.size && defaultParams.size) {
    commit("SET_SIZE", defaultParams.size);
  }
  if (!state.params.dpi && defaultParams.dpi) {
    commit("SET_DPI", defaultParams.dpi);
  }
  if (!state.params.mode && defaultParams.mode) {
    commit("SET_MODE", defaultParams.mode);
  }
};
function sortFiles(files) {
  return files.sort(function (prevEl, currentEl) {
    if (prevEl.order > currentEl.oder) {
      return 1;
    }
    if (prevEl.order < currentEl.order) {
      return -1;
    }
    return 0;
  });
}
export const state = () => ({
  connected: false,
  isLoading: false,
  file: null,
  currentDevice,
  devices: [],
  files: [],
  currentPageId: 0,
  params: deviceParamsByCurrentDevice || {
    mode: null,
    deviceName: null,
    dpi: null,
    size: null
  }
});

export const getters = {
  connected({ connected }) {
    return connected
  },
  isLoading({ isLoading }) {
    return isLoading;
  },
  isFilesEmpty({ files }) {
    return files.length === 0;
  },
  devices({ devices }) {
    return devices;
  },
  currentPage({ files, currentPageId }) {
    if (files) return files.find(page => page.id === currentPageId);
  },
  files({ files }) {
    return files;
  },
  file({ file }) {
    return file;
  },
  params({ params }) {
    return params;
  },
  currentPageId({ currentPageId }) {
    return currentPageId;
  },
  currentDevice({ currentDevice }) {
    return currentDevice;
  }
};
export const mutations = {
  SET_CONNECTED_STATE(state, isConnected) {
    state.connected = isConnected
  },
  SHOW_LOADING(state) {
    state.isLoading = true;
  },
  CLOSE_LOADING(state) {
    state.isLoading = false;
  },
  DELETE_FILES(state) {
    state.files = [];
  },
  SET_FILE(state, payload) {
    state.file = payload;
  },
  SET_DEVICE(state, payload) {
    state.params.id = payload;
    writeParamsByCurrentDevice(state.params, state.params.deviceName);
  },
  SET_SIZE(state, payload) {
    state.params.size = payload;
    writeParamsByCurrentDevice(state.params, state.params.deviceName);
  },
  SET_MODE(state, payload) {
    state.params.mode = payload;
    writeParamsByCurrentDevice(state.params, state.params.deviceName);
  },
  SET_DPI(state, payload) {
    state.params.dpi = payload;
    writeParamsByCurrentDevice(state.params, state.params.deviceName);
  },
  DELETE_PAGE(state) {
    state.files = state.files.filter(file => file.id !== state.currentPageId);
  },
  SET_PAGE(state, payload) {
    payload.rotate = 0;
    payload.order = state.files.length + 1;
    state.files.push(payload);
  },
  SET_CURRENT_PAGE_ID(state, payload) {
    state.currentPageId = payload;
  },
  ROTATE_PAGE(state, payload) {
    state.files.map(page => {
      if (page.id === state.currentPageId) {
        let newRotate = page.rotate + payload;

        if (newRotate < 0) {
          newRotate = 270;
        } else if (newRotate === 360) newRotate = 0;

        page.rotate = newRotate;
      }
    });
  },
  SET_DEVICES(state, payload) {
    state.devices = payload;
  },
  SET_DEVICE_NAME(state, payload) {
    state.params.deviceName = payload;
    writeParamsByCurrentDevice(state.params, state.params.deviceName);
  },
  SET_PARAMS(state, payload) {
    state.params = payload;
    writeParamsByCurrentDevice(state.params, state.params.deviceName);
  },
  SET_CURRENT_DEVICE_PARAMS(state, payload) {
    state.currentDevice = payload;
    localStorage.setItem("currentDevice", JSON.stringify(state.currentDevice));
  },
  SET_ORDER(state, payload) {
    let newOrder;
    let files = state.files.map(page => {
      if (page.id === state.currentPageId) {
        if (payload === "up") page.order -= 1;
        else if (payload === "down") page.order += 1;
        newOrder = page.order;
      }

      return page;
    });
    files = files.map(page => {
      if (payload == "up") {
        if (page.id !== state.currentPageId && page.order === newOrder) {
          page.order++;
        }
      } else if (payload == "down") {
        if (page.id !== state.currentPageId && page.order === newOrder) {
          page.order--;
        }
      }

      return page;
    });
    state.files = sortFiles(files);
  }
};
export const actions = {
  rotatePage({ commit }, payload) {
    commit("ROTATE_PAGE", payload);
  },
  setPage({ commit }, payload) {
    commit("SET_PAGE", payload);
    commit("SET_CURRENT_PAGE_ID", payload.id);
  },
  deletePage({ commit }, payload) {
    commit("DELETE_PAGE", payload);
    commit("SET_CURRENT_PAGE_ID", null);
  },
  saveFile({ state }) {
    const file = state.files.map(({ id, rotate, order }) => {
      return { id, rotate, order };
    });
    this.$scanner.generatePdf(file);
  },
  scanDocument({ state }) {
    this.$scanner.scanDocument(state.params);
  },
  setParams({ commit }, payload) {
    commit("SET_PARAMS", payload);
  },
  setFile({ commit }, payload) {
    commit("SET_FILE", payload);
  },
  onClose({ commit }) {
    commit("DELETE_FILES");
    this.$scanner.stopConnection();
  },
  setDevicesName({ commit }, payload) {
    commit("SET_DEVICE_NAME", payload);
  },
  setDevices({ commit }, payload) {
    commit("SET_DEVICES", payload);
  },
  setCurrentDeviceParamsStore({ commit, state }, payload) {
    commit("SET_CURRENT_DEVICE_PARAMS", payload);
    setDefaultParams(
      { state, commit },
      {
        size: payload.defaultSize,
        mode: payload.defaultMode,
        dpi: payload.defaultDpi
      }
    );
  },
  invokeCurrentDeviceParamsStore({ commit, state }, payload) {
    this.$scanner.getDeviceParams(payload);
  },
  setOrderUp({ commit }) {
    commit("SET_ORDER", "up");
  },
  setOrderDown({ commit }) {
    commit("SET_ORDER", "down");
  },
  onError({ commit }) {
    commit("CLOSE_LOADING");
    alert(
      this.$i18n.t("scanner.alert.errorScanDocument", "scanner.alert.error")
    );
  }
};
