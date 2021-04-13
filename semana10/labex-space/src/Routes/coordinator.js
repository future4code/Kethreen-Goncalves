export const goToListTripsPage = (history) => {
    history.push("/trips/list");
  };

export const goToLastPage = (history) => {
    history.goBack();
  };

export const goToApplicationFormPage = (history) => {
    history.push("/trips/application");
  };

export const goToLoginPage = (history) => {
    history.push("/login");
  };

export const goToAdminHomePage = (history) => {
    history.push("/admin/trips/list");
  };

export const goToTripDetailsPage = (history) => {
    history.push("/admin/trips/:id");
  };