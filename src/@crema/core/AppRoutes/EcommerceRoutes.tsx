import React from "react";
import { RoutePermittedRole } from "@crema/constants/AppEnums";

const Products = React.lazy(
  () => import("../../../modules/ecommerce/Products"),
);
const ProductDetail = React.lazy(
  () => import("../../../modules/ecommerce/ProductDetail"),
);
const Customers = React.lazy(
  () => import("../../../modules/ecommerce/Customers"),
);
const Checkout = React.lazy(
  () => import("../../../modules/ecommerce/Checkout"),
);
const Carts = React.lazy(() => import("../../../modules/ecommerce/Carts"));
const Orders = React.lazy(() => import("../../../modules/ecommerce/Orders"));
const Confirmation = React.lazy(
  () => import("../../../modules/ecommerce/Confirmation"),
);
const Invoice1 = React.lazy(
  () => import("../../../modules/ecommerce/Invoice1"),
);
const Invoice2 = React.lazy(
  () => import("../../../modules/ecommerce/Invoice2"),
);

const ProductListing = React.lazy(
  () => import("../../../modules/ecommerce/Admin/Listing"),
);
const AddProduct = React.lazy(
  () => import("../../../modules/ecommerce/Admin/AddEditProduct"),
);
const EditProduct = React.lazy(
  () => import("../../../modules/ecommerce/Admin/EditProduct"),
);

export const ecommerceConfig = [
  {
    permittedRole: RoutePermittedRole.User,
    path: "/ecommerce/invoice-1",
    element: <Invoice1 />,
  },

  {
    permittedRole: RoutePermittedRole.User,
    path: "/ecommerce/invoice-2",
    element: <Invoice2 />,
  },

  {
    permittedRole: RoutePermittedRole.User,
    path: "/ecommerce/products",
    element: <Products />,
  },

  {
    permittedRole: RoutePermittedRole.User,
    path: ["/ecommerce/product_detail/", "/ecommerce/product_detail/:id"],
    element: <ProductDetail />,
  },

  {
    permittedRole: RoutePermittedRole.User,
    path: "/ecommerce/customers",
    element: <Customers />,
  },

  {
    permittedRole: RoutePermittedRole.User,
    path: "/ecommerce/checkout",
    element: <Checkout />,
  },

  {
    permittedRole: RoutePermittedRole.User,
    path: "/ecommerce/cart",
    element: <Carts />,
  },

  {
    permittedRole: RoutePermittedRole.User,
    path: "/ecommerce/orders",
    element: <Orders />,
  },

  {
    permittedRole: RoutePermittedRole.User,
    path: "/ecommerce/confirmation",
    element: <Confirmation />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/ecommerce/product-listing",
    element: <ProductListing />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/ecommerce/add-products",
    element: <AddProduct />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/ecommerce/edit-products/:id",
    element: <EditProduct />,
  },
];
