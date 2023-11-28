import {
  HubConnectionBuilder,
  LogLevel,
  HttpTransportType
} from "@microsoft/signalr";

export default function (app) {
  const connection = new HubConnectionBuilder()
    .withUrl("http://localhost:8886/SignalR")
    // .withAutomaticReconnect(0)
    .withAutomaticReconnect()
    .configureLogging(LogLevel.Information)
    .build();
  async function tryConnect() {
    try {
      await connection.start();
      console.log("connected", true);
      return true;
    } catch {
      console.log("connected", false);
      return false;
    }
  }
  async function getDeviceParams(name) {
    try {
      await connection.invoke("getDeviceParams", name);
      return true;
    } catch {
      return false;
    }
  }
  async function scanDocument(params) {
    try {
      await connection.invoke("startScan", params);
      return true;
    } catch {
      return false;
    }
  }
  async function generatePdf(files) {
    try {
      await connection.invoke("generatePdf", files);
      return true;
    } catch {
      return false;
    }
  }
  function onSourceDisabled(handler) {
    connection.on("sourceDisabled", handler);
  }
  function onError(handler) {
    connection.on("error", handler);
  }
  function stopConnection() {
    connection.stop();
    app.store.commit("scanner/SET_CONNECTED_STATE", false);
  }
  function printerParams(handler) {
    connection.on("printerParams", handler);
  }
  function onUpdateDeviceInfo(handler) {
    connection.on("UpdateDeviceInfo", handler);
  }
  function onScanCompleted(handler) {
    connection.on("scanCompleted", handler);
  }
  function onFileGenerated(handler) {
    connection.on("fileGenerated", handler);
  }
  onUpdateDeviceInfo(devices => {
    app.store.dispatch("scanner/setDevices", devices);
  });
  onScanCompleted(document => {
    app.store.dispatch("scanner/setPage", document);
  });
  onSourceDisabled(() => {
    app.store.commit("scanner/CLOSE_LOADING");
  });
  onFileGenerated(file => {
    app.store.dispatch("scanner/setFile", file);
  });
  onError(message => {
    app.store.dispatch("scanner/onError", message);
  });
  printerParams(currentDevice => {
    app.store.dispatch("scanner/setCurrentDeviceParamsStore", currentDevice);
  });
  return {
    getDeviceParams,
    tryConnect,
    scanDocument,
    generatePdf,
    stopConnection
  };
}
