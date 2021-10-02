import {IMenuItem} from '../interfaces/IMenuItem';

export const menuItems: IMenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    ScreenComponent: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    ScreenComponent: 'Animation102Screen',
  },
  {
    name: 'Switches',
    icon: 'toggle-outline',
    ScreenComponent: 'SwitchScreen',
  },
  {
    name: 'Alerts',
    icon: 'alert-circle-outline',
    ScreenComponent: 'AlertScreen',
  },
];
