import { CityProps } from "@services/getCityByNameService";
import {
  getStorageCity,
  removeStorageCity,
  saveStorageCity,
} from "./cityStorage";

const newCity: CityProps = {
  id: "1",
  name: "São Paulo",
  longitude: -46,
  latitude: -23,
};

describe("Storage: cityStorage", () => {
  it("should be return null when don't have a city on storage", async () => {
    const response = await getStorageCity();

    expect(response).toBeNull();
  });

  it("should be return city saved on storage", async () => {
    await saveStorageCity(newCity);
    const response = await getStorageCity();

    expect(response).toEqual(newCity);
  });

  it("should be return city removed from the storage", async () => {
    await saveStorageCity(newCity);
    await removeStorageCity();

    const response = await getStorageCity();

    expect(response).toBeNull();
  });
});
