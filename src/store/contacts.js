export const ADD_CONTACT = "ADD_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";
export const EDIT_CONTACT = "EDIT_CONTACT";

export const MODULE_NAME = "contacts";
export const getContacts = (state) => state[MODULE_NAME].contacts;

const initialState = {
  contacts: [
    {
      id: 1,
      name: "Nijat Dursunlu",
      tel: "+994 51 361 30 25",
      email: "nicat.durunlu@gmail.com",
      address: "68343 Hovde Trail",
      image: "http://nijatdursunlu.me/assets/images/image-3.jpg",
    },
    {
      id: 2,
      name: "Lisetta Pymar",
      tel: "352-314-3406",
      email: "fbullene0@adobe.com",
      address: "851 Russell Center",
      image:
        "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80",
    },
    {
      id: 3,
      name: "Eugene Handman",
      tel: "203-468-4662",
      email: "tehandman1@china.com.cn",
      address: "88764 Messerschmidt Court",
      image:
        "https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      id: 4,
      name: "Aldric Fake",
      tel: "859-744-6240",
      email: "tafake2@tmall.com",
      address: "68343 Hovde Trail",
      image:
        "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      name: "Aldric Fake",
      tel: "859-744-6240",
      email: "tafake2@tmall.com",
      address: "8069 Johnson Crossing",
      image:
        "https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      id: 6,
      name: "Sharia Livesley",
      tel: "608-826-2182",
      email: "slivesley3@hubpages.com",
      address: "4 Kings Way",
      image:
        "https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 7,
      name: "Myron Cracker",
      tel: "625-367-0988",
      email: "mycracker4@ets.com",
      address: "68343 Hovde Trail",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      id: 8,
      name: "Charlotte Elijah",
      tel: "425-417-9149",
      email: "celijah6@sciencedaily.com",
      address: "50 Dorton Lane",
      image:
        "https://images.unsplash.com/photo-1542131596-dea5384842c7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
  ],
};

export function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_CONTACT:
      return {
        contacts: [
          {
            id: payload.id,
            name: payload.name,
            tel: payload.tel,
            email: payload.email,
            address: payload.address,
            image: payload.image,
          },
          ...state.contacts,
        ],
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id != payload.id),
      };
    case EDIT_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) => {
          if (contact.id === payload.id) {
            return {
              ...contact,
              name: payload.name,
              tel: payload.tel,
              email: payload.email,
              address: payload.address,
              image: payload.image,
            };
          }
          return contact;
        }),
      };
    default:
      return state;
  }
}
