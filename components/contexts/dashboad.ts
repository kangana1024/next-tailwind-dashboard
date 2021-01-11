import { createContext } from "react";

export type DashboardSettingType = {
  version: {
    version?: number;
    setVersion?: React.Dispatch<React.SetStateAction<number>>
  },
  loading: {
    loading: boolean,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  }
  menu: {
    activeMenu: boolean,
    setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>
  }

};
const DashboardSetting = createContext<DashboardSettingType>({
  version: {
    version: 1,
    setVersion: () => { return; }
  },
  loading: {
    loading: false,
    setLoading: () => { return; },
  },
  menu: {
    activeMenu: false,
    setActiveMenu: () => { return; }
  }
});

export const DashboardSettingProvider = DashboardSetting.Provider;
export const DashboardSettingConsumer = DashboardSetting.Consumer;

export default DashboardSetting;
