const roleToRouter = {
  coustomer: [{
    name: 'Product',
  }, {
    name: 'ProductList',
  },
  {
    name: 'Category',
  }],
  admin: [{
    name: 'Product',
  }, {
    name: 'ProductList',
  }, {
    name: 'ProductAdd',
  },
  {
    name: 'Category',
  }],
};

export default function getMenuRoute(role, routes) {
  const roleArr = roleToRouter[role].map((item) => item.name);
  const resultRoles = routes.filter((r) => {
    const obj = r;
    if (roleArr.indexOf(r.name) !== -1) {
      const { children } = obj;
      obj.children = children.filter((c) => roleArr.indexOf(c.name) !== -1);
      return true;
    }
    return false;
  });
  return resultRoles;
}
