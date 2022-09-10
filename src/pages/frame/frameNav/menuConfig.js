// 菜单配置文件，支持一级二级菜单配置。

const MenuConfig1 = [
  { router: '/wolf/home/testPage1', name: '二级菜单1', icon: 'pie-chart' },
  { router: '/wolf/home/testPage2', name: '二级菜单2', icon: 'pie-chart' }
];

const MenuConfigCol = [
  {
    name: 'justTest',
    menu: [],
    router: '/wolf/home/testPage',
    // icon: 'down',
    // icon_side: 'pie-chart'
  },
  {
    name: '搜索test',
    menu: [],
    router: '/wolf/home/Search',
    // icon: 'down',
    icon_side: 'pie-chart'
  },
  {
    name: '数据管理',
    menu: MenuConfig1,
    router: '',
    icon: 'down',
    icon_side: 'pie-chart'
  },
  {
    name: '权限管理',
    menu: '',
    router: '/wolf/home/testPage5',
    // icon: 'down',
    icon_side: 'pie-chart'
  }
];

export { MenuConfigCol };
