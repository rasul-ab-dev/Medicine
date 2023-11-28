export const dataApi = {
  UserPhotoHash:
    process.env.NODE_ENV === "production"
      ? document.location.origin + "/StaticFiles/Employees/Thumbnails/"
      : `${process.env.SERVER_URL}/StaticFiles/Employees/Thumbnails/`,
  OidcConfiguration: `/_configuration/${process.env.oidcClientId}`,
  applicantGroups: "/api/ApplicantGroups",
  applicants: "/api/Applicants",
  applicationDisease: "/api/ApplicationDisease",
  applicationDiseaseByApplication: "/api/ApplicationDisease/application",
  applicationObservationPayments: "/api/ApplicationObservationPayments",
  applicationObservationResults: "/api/ApplicationObservationResults",
  applicationObservationResultValues: "/api/ApplicationObservationResultValues",
  applicationObservations: "/api/ApplicationObservations",
  applicationObservationsPrice: "/api/ApplicationObservations/price",
  applicationObservationsGroup: "/api/ApplicationObservations/group",
  applicationObservationsNote: "/api/ApplicationObservations/note",
  applications: "/api/Applications",
  authentications: "/api/Authentications",
  blankProperties: "/api/BlankProperties",
  blanks: "/api/Blanks",
  bulletinReaderInfos: "/api/BulletinReaderInfos",
  bulletins: "/api/Bulletins",
  cabinets: "/api/Cabinets",
  clinics: "/api/Clinics",
  diseases: "/api/Diseases",
  images: "/api/Images",
  jobPositions: "/api/JobPositions",
  observationPrices: "/api/ObservationPrices",
  observations: "/api/Observations",
  paymentTypes: "/api/PaymentTypes",
  permissions: "/api/Permissions",
  regions: "/api/Regions",
  district: "/api/Districts",
  citys: "/api/Citys",
  users: "/api/Users",
  usersFreeTimes: "/api/Users/UserFreeTimes",
  workingDays: "/api/WorkingDays",
  roles: "/api/Roles",
};