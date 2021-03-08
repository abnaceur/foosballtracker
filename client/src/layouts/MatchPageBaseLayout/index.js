import React from "react";

// Layout
import BaseLayout from "../base";

// Style
import { PageContent } from "./style";
import SideNavbar from '../../components/templates/sideNavbar';

const MatchPageBaseLayout = ({ children, ...rest }) => {
  return (
    <BaseLayout {...rest}>
      <PageContent>
      <SideNavbar/>
        {children}
      </PageContent>
    </BaseLayout>
  );
};

export default MatchPageBaseLayout;
