import classNames from "classnames";
import AppButton from "components/Buttons/AppButton";
import TextInput from "components/Forms/TextInput";
import Row from "layouts/Row";
import Stack from "layouts/Stack";
import Image from "next/image";
import React, { FunctionComponent } from "react";

export type ContactProps = {
  name: string;
  course: string;
  email: string;
  mobileNo: string;
  address: string;
};

const Contact: FunctionComponent<ContactProps> = () => {
  return (
    <>
      <Stack className="items-center bg-white text-gray-900 -pt-32 pb-24 gap-24 relative">
        {/** Separator */}
        <div
          className={classNames(
            "absolute top-0 inset-x-0",
            "w-0 h-0",
            "border-r-[100vw] border-r-transparent border-b-[13.9vw] border-b-white",
            "mt-[-13.8vw]"
          )}
        ></div>
        {/** Content */}
        <Stack className="z-10 space-y-16 w-full">
          <Stack className="space-y-2 text-center  max-w-screen-lg px-12 mx-auto">
            <h1 className="text-3xl font-bold tracking-wide uppercase text-gray-800">
              Contact
            </h1>
            <p className="text-gray-500">
              Feel free to contact me anytime, I’ll get back to you as soon as
              possible
            </p>
          </Stack>
          <Stack className="space-y-2 w-full max-w-md mx-auto px-8">
            <TextInput label="Name" name="Name" value="" />
            <TextInput label="Email" name="Email" value="" />
            <TextInput label="Message" name="Message" value="" />
            <AppButton>
              <span className="font-bold uppercase">Submit</span>
            </AppButton>
          </Stack>
          <Stack className="max-w-screen-md w-full py-4 px-8 mx-auto space-y-8 items-center">
            <div className="w-full border border-t-gray-100" />
            <Row className="space-x-4 justify-center">
              <div className="rounded-full h-12 w-12 relative">
                <Image
                  src={"/assets/portfolio/logo-facebook.svg"}
                  alt="Facebook"
                  fill
                />
              </div>
              <div className="rounded-full h-12 w-12 relative">
                <Image
                  src={"/assets/portfolio/logo-github.svg"}
                  alt="Facebook"
                  fill
                />
              </div>
              <div className="rounded-full h-12 w-12 relative">
                <Image
                  src={"/assets/portfolio/logo-linkedin.svg"}
                  alt="Facebook"
                  fill
                />
              </div>
              <div className="rounded-full h-12 w-12 relative">
                <Image
                  src={"/assets/portfolio/mail-sharp.svg"}
                  alt="Facebook"
                  fill
                />
              </div>
            </Row>
            <h4 className="uppercase text-gray-500">
              Paolo Vincent Julian{" "}
              <span className="text-primary-600 font-bold">©2017</span>
            </h4>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Contact;
