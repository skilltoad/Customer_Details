export const customers = Array.from({ length: 1000 }, (_, index) => ({
    id: index + 1,
    name: `Customer ${index + 1}`,
    title: `Title ${index + 1}`,
    address: `Address ${index + 1}`,
  }));