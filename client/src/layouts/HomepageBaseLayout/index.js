import React from "react";

// Layout
import BaseLayout from "../base";

// Style
import { PageContent } from "./style";

const HomepageBaseLayout = ({ children, ...rest }) => {
  return (
    <BaseLayout {...rest}>
      <PageContent>
        {children}
      </PageContent>
    </BaseLayout>
  );
};

export default HomepageBaseLayout;
