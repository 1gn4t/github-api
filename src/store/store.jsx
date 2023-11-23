import { makeAutoObservable, runInAction } from "mobx";
import throttle from "../utils/throttle";
import { getGithubRepo } from "../api/getGithubRepo";
import { fromPromise } from "mobx-utils";
import { makePersistable } from "mobx-persist-store";

class Store {
  page = 1;
  searchStr = "";
  response = [];
  repositories = [];
  currRepo = {};
  favoriteList = [];
  copied = false;

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: "Store",
      properties: ["currRepo", "favoriteList"],
      storage: window.localStorage,
    });
  }

  switchCopy = (bool) => {
    this.copied = bool;

    if (bool) {
      setTimeout(() => {
        this.copied = !bool;
      }, 2000);
      return;
    }
  };

  getMoreRepo = () => {
    this.page += 1;
    console.log(this.page);
    this.getRepo();
  };

  removeFavoriteRepo = (data) => {
    this.favoriteList = this.favoriteList.filter((item) => item.id !== data.id);
  };

  setFavoriteRepo = (data) => {
    if (this.favoriteList.some((item) => item.id === data.id)) return;
    this.favoriteList = [...this.favoriteList, data];
  };

  setCurrRepo = (data) => {
    this.currRepo = data;
  };

  setSearchStr = (value) => {
    this.searchStr = value;
    this.page = 1;
  };

  getRepo = throttle(() => {
    if (this.searchStr === "") return;

    runInAction(() => {
      this.response = fromPromise(getGithubRepo(this.searchStr, this.page));
    });
  }, 500);
}

export default new Store();
