export const dataAPI = (data) => {
    return {
      type: "DATA",
      name: data.name,
      no_account: data.no_account,
      no_phone: data.no_phone,
    };
};