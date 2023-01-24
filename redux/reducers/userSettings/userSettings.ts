import { createSlice } from "@reduxjs/toolkit";

import { UserSettingModel } from "./userSetting.model";

const initialState: UserSettingModel = {
  isDarkMode: false,
};

const useSettingsRducer = createSlice({
  initialState: initialState,
  name: "userSettings",
  reducers: {
    changeThemeColor: (state, action) => {
      state.isDarkMode = action.payload;
    },
  },
});
export const { changeThemeColor } = useSettingsRducer.actions;

export default useSettingsRducer.reducer;
