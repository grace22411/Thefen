import React, { useEffect, useState } from "react";
import { Navbar, List, ImageList, Spinner } from "../../components";
import { Link, useHistory } from "react-router-dom";
import {
  CustomButton,
  FlexContainer,
  Header3,
  ParagraphText,
  Image,
} from "../../styles";
import { Colors } from "../../styles/colors";
import {
  pattern,
  brandimage,
  groupimg,
  laptopsurf,
  payment,
  website_shop,
} from "../../images";
import "./home.scss";
import { isLoggedIn } from "../../services/authServices";
import { Spin } from "antd";

export const Home = (props: any) => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const run = isLoggedIn()
      ? () => {
          setIsLoading(false);
          history.replace("/dashboard");
        }
      : () => {
          setIsLoading(false);
          history.replace("/login");
        };
    run();
  }, []);
  return (
    <div>
      {isLoading ? (
        <div style={{ height: "100vh" }} className="centered">
          <Spin style={{ margin: "auto" }} />
        </div>
      ) : (
        <div className="page-container">
          <Navbar />
          <FlexContainer
            background={Colors.blueColor}
            className="large-wrapper"
          >
            <div className="align-div">
              <div className="flex-div">
                <div className="header-text">
                  <Header3
                    fontSize="4.8rem"
                    weight="700"
                    style={{ marginBottom: "0px", lineHeight: "1.2em" }}
                  >
                    We Shop for you, <br />
                    and Deliver to you,
                  </Header3>
                  <div className="header-image-container">
                    <Image width="40%" position="absolute" src={pattern} />
                  </div>
                </div>
                <div className="subtitle-text">
                  <ParagraphText>
                    With Therfen, you can get assisted Shopping services from
                    your favourite stores abroad, and have us deliver it to you
                    seamlessly.
                  </ParagraphText>
                </div>
              </div>

              <div className="button-container">
                <Link to="/register">
                  <CustomButton
                    style={{ boxShadow: "inset 0px 8px 12px #EC4D60" }}
                    width="140"
                    className="font-noto"
                    bgColor={Colors.redColor}
                  >
                    Get Started{" "}
                    <i
                      className="fas fa-arrow-right"
                      style={{ marginLeft: "12px", fontSize: "18px" }}
                    ></i>
                  </CustomButton>
                </Link>
              </div>
            </div>
            <div className="align-div">
              <div className="image-container">
                <Image width="110%" src={brandimage} />
              </div>
            </div>
          </FlexContainer>

          <div
            className="how-we-work"
            style={{ background: Colors.tealColor2 }}
          >
            <Header3
              className="how-we-work-header-text"
              color={Colors.darkColor}
              fontSize="3em"
            >
              How it Works <hr />
            </Header3>
            <FlexContainer className="flex-width">
              <div className="image-container group-image">
                <Image width="55%" src={groupimg} />
              </div>
              <div style={{ padding: "5px" }}>
                <div className="how-we-work-img">
                  <img src={laptopsurf} alt="" />
                </div>
                <List headerText="Shop from your favorite store" bodyText="" />

                <div className="how-we-work-img">
                  <img src={website_shop} alt="" />
                </div>
                <List headerText="Copy & Paste  URL" bodyText="" />

                <div className="how-we-work-img">
                  <img src={payment} alt="" />
                </div>
                <List headerText="Make payments & Track shipment" bodyText="" />
              </div>
            </FlexContainer>
          </div>

          <div className="faq">
            <Header3
              className="how-we-work-header-text"
              color={Colors.darkColor}
              fontSize="3em"
            >
              FAQ
            </Header3>
            <FlexContainer className="faq-list">
              <ImageList
                headerText="What is Therfen?"
                contentText={[
                  "It’s an end to end online assisted shopping and shipping service platform for overseas online and offline stores ",
                ]}
              />
              <ImageList
                headerText="Who can use Therfen services?"
                contentText={[
                  "Anyone that is interested in buying online, but needs premium assisted shopping and shipping services ",
                ]}
              />
              <ImageList
                headerText="Do I need to pay to sign up?"
                contentText={["Sign up is free"]}
              />
              <ImageList
                headerText="How many types of customers exist?"
                contentText={["Retail and Premium"]}
              />
              <ImageList
                headerText="Who is a retail customer?"
                contentText={[
                  "One that purchase items whenever the need arises ",
                ]}
              />
              <ImageList
                headerText="Who is a premium customer?"
                contentText={[
                  "1. One that purchases in bulk and intends to sell to other customers,",
                  "2. Pays a monthly subscription fee ",
                  "3. No service charge billed.",
                  "4. Dedicated Account manager",
                  "5. Can shop both online and offline stores",
                ]}
              />
              <ImageList
                headerText="How much is the monthly subscription fee for premium customers?"
                contentText={[
                  "£xxx or its Naira equivalent for UK stores only",
                  "$xxx or its Naira equivalent for USA stores only",
                ]}
              />
              <ImageList
                headerText="How is the amount deducted?"
                contentText={[
                  "This is carried out from the debit card used for subscription after a 30 days cycle. ",
                ]}
              />
              <ImageList
                headerText="Can I cancel the subscription?"
                contentText={[
                  "Yes. Simply log on to the customer portal, click on Subscription and payments, click on cancel subscription, before its expiry and renewal period ",
                ]}
              />
              <ImageList
                headerText="If I have been debited already, can it be reversed?"
                contentText={[
                  "No, simply maximize the benefits of the plan before its expiry ",
                ]}
              />
              <ImageList
                headerText="How does it work??"
                contentText={[
                  "1.Visit any of your favorite online stores in the United States of America or United Kingdom",
                  "2. Search for the item you are interested on the website",
                  "3. Copy the web link (URL), paste it on the Therfen customer portal,",
                  "4. Fill in the details of the items, and other information",
                  "5. Make payments ",
                  "6. Leave the rest to us, as we give you total visibility on the entire process till the item arrives at the final destination ",
                  "7.Shop on your favorite online stores (Amazon, Ali express etc.) in the Therfen environment",
                  "8. Add to cart",
                  "9.Proceed to payment with your local currency in Nigeria and get the item delivered to you in Nigeria.",
                ]}
              />
              <ImageList
                headerText="Why choose us?"
                contentText={[
                  "We assist you shop abroad, both online and offline and keep you in the loop throughout the entire process.",
                ]}
              />
              <ImageList
                headerText="Whose address do I use when shopping?"
                contentText={[
                  "Your address has been saved with us already when creating you profile, Therfen will deliver to the address stated in your profile",
                  "How many items can I shop for on Amazon or Ali express?Infinity",
                ]}
              />
              <ImageList
                headerText="How is payment made?"
                contentText={[
                  "Through our secured payment gateway OR transfer to bank",
                ]}
              />
              <ImageList
                headerText="Can I buy multiple items at the same time?"
                contentText={[
                  "Yes. The customer portal allows for infinity upload of URL, so you can shop as much as you want.",
                ]}
              />
              <ImageList
                headerText="If I choose the transfer to bank, how Is it validated?"
                contentText={[
                  "Customer uploads payment receipt and Reference number on the customer portal for validation",
                ]}
              />
              <ImageList
                headerText="What happens if the item requested by customer goes out of stuck after customer initiates the request?"
                contentText={[
                  "Therfen will alert the customer via email, and will advise on options customer is open to.",
                ]}
              />
              <ImageList
                headerText="What items can be shopped for?"
                contentText={[
                  "Items not prohibited by the USA, UK, Nigeria government policy.",
                ]}
              />
              <ImageList
                headerText="If a customer does not want the option given by Therfen, what happens next?"
                contentText={[
                  "Customer is refunded the 100% of the shopping cost OR customer can convert the value into a future voucher purchase",
                ]}
              />
              <ImageList
                headerText="Can I add more URL to existing URL after the process has commenced?"
                contentText={[
                  "Yes. Customer needs to click on the consolidate feature on customer portal before the weekly take off day OR This will be treated as a separate shopping and shipping request",
                ]}
              />
              <ImageList
                headerText="How many times in a week do you ship to Nigeria?"
                contentText={["Weekly "]}
              />
              <ImageList
                headerText="How is shipping cost calculated?"
                contentText={[
                  "Items are grouped in different categories and quantity, and that determines the rate for shipping to Nigeria",
                ]}
              />
              <ImageList
                headerText="Who is responsible for custom clearing?"
                contentText={[
                  "Therfen takes care of custom clearing in USA, UK, & Nigeria.",
                ]}
              />
              <ImageList
                headerText="How are items delivered in Nigeria?"
                contentText={[
                  "We are in collaboration with various logistics partners in Nigeria, and will either take the option of Home delivery option or Designated pick-up centers based on the coatomer’s’ location in Nigeria ",
                ]}
              />
              <ImageList
                headerText="What cities will Therfen likely do Home delivery?"
                contentText={["Lagos, Abuja, Portharcout."]}
              />
              <ImageList
                headerText="Who takes care of packaging of the items purchased?"
                contentText={["Therfen does at no cost to the customer"]}
              />
              <ImageList
                headerText="What is the return policy?"
                contentText={[
                  "An item purchased can be returned before it’s been shipped to customer in Nigeria",
                ]}
              />
            </FlexContainer>
          </div>
          <div className="contact-section">
            <Header3 color={Colors.yellowColor} fontSize="2em" weight="700">
              For Inquiries please contact - +447495052289{" "}
            </Header3>
          </div>
          <footer className="footer-section">
            <ParagraphText>
              © 2022 Therfen. Powered by Northsnow Limited
            </ParagraphText>
          </footer>
        </div>
      )}
    </div>
  );
};
