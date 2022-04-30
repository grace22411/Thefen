import axios from "axios";
import { errorNotification } from "./statusNotifyer";
import { urls } from "./urls";

export function AddAddress(
  address: AddressDTO,
  { stopLoader }: { stopLoader: Function }
) {
  return axios
    .post(urls.saveAddress, address)
    .catch((error) => {
      errorNotification(error);
    })
    .finally(() => {
      stopLoader();
    });
}
export function getStates(saveStates: Function) {
  return axios
    .get(urls.allStates)
    .then((data) => {
      saveStates(data.data.data.result);
    })
    .catch((error) => {
      errorNotification(error);
    })
    .finally(() => {
      //   stopLoader();
    });
}
export function getAllShippingInfo(
  saveInfos: Function,
  { stopLoader }: { stopLoader: Function }
) {
  return axios
    .get(urls.saveAddress)
    .then((response) => {
      saveInfos(response.data);
    })
    .catch((error) => {
      errorNotification(error);
    })
    .finally(() => {
      stopLoader();
    });
}
