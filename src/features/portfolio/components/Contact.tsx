import Row from "layouts/Row";
import Stack from "layouts/Stack";
import React, { FunctionComponent } from "react";

export type ContactProps = {
  // No Props
};

const Contact: FunctionComponent<ContactProps> = () => {
  return (
    <Stack className="items-center bg-white text-gray-900 py-24 gap-24">
      <Stack className="gap-8 text-center  max-w-screen-lg px-12 mx-auto">
        <h1 className="text-3xl font-bold tracking-wide uppercase">Contact</h1>
      </Stack>
      <div className="bg-bg h-24 w-full max-w-screen-sm">
        <Stack>
          <Row className="justify-end"></Row>
        </Stack>
      </div>
    </Stack>
  );
};

export default Contact;
