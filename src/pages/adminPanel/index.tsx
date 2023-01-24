import React from "react";
import type { ReactElement } from "react";

import AdminLayout from "components/layout/adminpanel/AdminLayout";
import type { NextPageWithLayout } from "../_app";
import { useSelector } from "react-redux";

const AdminPage = () => {
  return <div className="bg-red text-3xl font-bold underline">index</div>;
};

export default AdminPage;
AdminPage.getLayout = function getLayout(page: ReactElement) {

  return <AdminLayout userSettings>{page}</AdminLayout>;
};
