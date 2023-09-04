import React from "react";
import Container from "../components/Container";
import BoxFull from "../components/BoxFull";
import BoxMedium from "../components/BoxMedium";
import BoxSmall from "../components/BoxSmall";
import Button from "../components/Button";
import background from "../assets/images/0.jpg";
import image0 from "../assets/images/image0.png";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import textStyles from "../css/Text.module.css";
import marginStyles from "../css/Margin.module.css";
import boxStyles from "../css/Box.module.css";

const Features = () => {
  return (
    <div>
      <Container style={{ paddingInline: 0 }}>
        <BoxFull background={"linear-gradient(45deg, #00aaff -60%, #ff6cc4ef, #f6ff00 200%)"}>
          <div className={[textStyles.text42, textStyles.light, textStyles.bold].join(" ")}>
            fea stunning websites. Simplified for you.
          </div>
          <div className={marginStyles.block2rem}></div>
          <div className={[textStyles.text20, textStyles.light].join(" ")}>
            Unleash your creativity with a powerful web design app that caters to all your needs.
          </div>
          <div className={marginStyles.block2rem}></div>
          <Button text={"Explore features"} />
        </BoxFull>
      </Container>
      <Container>
        <BoxSmall background={"var(--orange-100)"}>
          <div>
            <div className={textStyles.text16}>NEW WEB DESIGN APP</div>
            <div className={[textStyles.text24, marginStyles.block1rem, textStyles.bold].join(" ")}>
              Redefine your design.
            </div>
            <div className={textStyles.text16}></div>
            With intuitive features and powerful tools, unlock limitless possibilities in web design. Dream Bigger.
          </div>
          <img
            className={boxStyles.image}
            src={image1}
            style={{ width: "110%", right: "-5%", position: "absolute" }}
            alt=""
          />
        </BoxSmall>
        <BoxSmall background={"linear-gradient(135deg ,#ff0069, #ff7f00)"}>
          <div>
            <div className={[textStyles.text24, textStyles.light, textStyles.bold].join(" ")}>
              Elevate your designs with our app.
            </div>
            <div className={[textStyles.text16, marginStyles.block1rem, textStyles.light].join(" ")}>
              Websites. Prototypes. Interactions. Create effortlessly. Dream Bigger. With our cutting-edge web design
              app and advanced features.
            </div>
            <div className={[textStyles.text16, textStyles.light].join(" ")}>Try it for free</div>
          </div>
          <img
            className={boxStyles.image}
            src={image0}
            style={{ width: "50%", right: "-10%", position: "absolute" }}
            alt=""
          />
        </BoxSmall>
        <BoxSmall background={"var(--purple-100)"}>
          <div>
            <div className={[textStyles.text16, textStyles.bold, textStyles.underline].join(" ")}>
              Discover our design tools
            </div>
            <div className={[textStyles.text14, marginStyles.block1rem].join(" ")}>Web Design App Trial</div>
            <div className={[textStyles.text14, marginStyles.block1rem].join(" ")}>Explore plans and pricing</div>
            <div className={[textStyles.text16, textStyles.bold, textStyles.underline].join(" ")}>
              Unleash your creativity
            </div>
            <div className={[textStyles.text14, marginStyles.block1rem].join(" ")}>Typography</div>
            <div className={[textStyles.text14, marginStyles.block1rem].join(" ")}>Responsive design</div>
            <div className={[textStyles.text14, marginStyles.block1rem].join(" ")}>User experience</div>
            <div className={[textStyles.text14, marginStyles.block1rem].join(" ")}>Color theory</div>
            <div className={[textStyles.text14, marginStyles.block1rem].join(" ")}>Interaction design</div>
            <div className={[textStyles.text14, marginStyles.block1rem].join(" ")}>Animations</div>
          </div>
        </BoxSmall>
      </Container>

      <Container>
        <BoxMedium background={image2}>
          <div>
            <div className={[textStyles.text30, textStyles.light, textStyles.bold].join(" ")}>
              Web design made easy.
            </div>
            <div className={[textStyles.text16, marginStyles.block1rem, textStyles.light].join(" ")}>
              Take your designs to the next level with our powerful web design app.
            </div>
            <div className={[textStyles.text16, textStyles.light, textStyles.bold].join(" ")}>Go to App</div>
          </div>
        </BoxMedium>
        <BoxSmall background={"linear-gradient(45deg, #ff00f6 -60%, #00ffcc, #46ff00 200%)"}>
          <div>
            <div className={[textStyles.text24, textStyles.dark, textStyles.bold].join(" ")}>
              Elevate your web design skills.
            </div>
            <div className={[textStyles.text16, marginStyles.block1rem].join(" ")}>
              Build impressive websites. Unleash your creativity with our innovative web design app.
            </div>
          </div>
        </BoxSmall>
      </Container>

      <Container style={{ paddingInline: 0 }}>
        <BoxFull background={"linear-gradient(45deg, #00ff0d -60%, #ffbb00, #ff0000 200%)"}>
          <div className={[textStyles.text36, textStyles.light, textStyles.bold].join(" ")}>
            Create stunning websites with WebDesignApp.
          </div>
          <div className={marginStyles.block2rem}></div>
          <div className={[textStyles.text20, textStyles.light].join(" ")}>
            Build beautiful and responsive web designs in minutes, making your online presence stand out from the crowd.
          </div>
          <div className={marginStyles.block2rem}></div>
          <Button text={"Explore features"} />
        </BoxFull>
      </Container>
      <Container>
        <BoxSmall background={"linear-gradient(45deg, #00ff0d -30%, #f200ff, #0077ff 200%)"}>
          <div>
            <div className={[textStyles.text16, textStyles.dark].join(" ")}>WEB DESIGN APP</div>
            <div className={[textStyles.text24, marginStyles.block1rem, textStyles.bold].join(" ")}>
              Create stunning websites effortlessly.
            </div>
            <div className={[textStyles.text16].join(" ")}>
              With the web design app, building professional websites has never been easier.
            </div>
          </div>
        </BoxSmall>
        <BoxSmall background={"linear-gradient(45deg, #d4ff00 -60%, #0099ff, #0077ff 200%)"}>
          <div>
            <div className={[textStyles.text16, textStyles.dark].join(" ")}>WEB DESIGN TOOL FOR BUSINESSES</div>
            <div className={[textStyles.text24, marginStyles.block1rem, textStyles.bold].join(" ")}>
              Boost productivity with our web design solution.
            </div>
            <div className={[textStyles.text16].join(" ")}>
              Streamline your web design process with our powerful tool for businesses.
            </div>
          </div>
        </BoxSmall>
        <BoxSmall background={"#ff8400ef"}>
          <div>
            <div className={[textStyles.text16, textStyles.bold, textStyles.underline].join(" ")}>
              Discover our web design apps
            </div>
            <div className={[textStyles.text14, marginStyles.block1rem].join(" ")}>Web Design Suite free trial</div>
            <div className={[textStyles.text14, marginStyles.block1rem].join(" ")}>Explore plans and pricing</div>
            <div className={[textStyles.text16, textStyles.bold, textStyles.underline].join(" ")}>
              See what you can create
            </div>
            <div className={[textStyles.text14, marginStyles.block1rem].join(" ")}>Responsive websites</div>
            <div className={[textStyles.text14, marginStyles.block1rem].join(" ")}>User-friendly interfaces</div>
            <div className={[textStyles.text14, marginStyles.block1rem].join(" ")}>Engaging multimedia content</div>
            <div className={[textStyles.text14, marginStyles.block1rem].join(" ")}>Visually appealing graphics</div>
            <div className={[textStyles.text14, marginStyles.block1rem].join(" ")}>Seamless user experiences</div>
            <div className={[textStyles.text14, marginStyles.block1rem].join(" ")}>Interactive 3D and AR elements</div>
          </div>
        </BoxSmall>
      </Container>

      <Container style={{ paddingInline: 0 }}>
        <BoxFull background={"linear-gradient(45deg, #c800ff -60%, #ff8400ef, #f6ff00 200%)"}>
          <div className={[textStyles.text16, textStyles.light].join(" ")}>WEB DESIGN APP SUITE</div>
          <div className={marginStyles.block2rem}></div>
          <div className={[textStyles.text42, textStyles.light, textStyles.bold].join(" ")} style={{ width: "50%" }}>
            Enhance customer experiences through design.
          </div>
          <div className={marginStyles.block2rem}></div>
          <div className={[textStyles.text20, textStyles.light].join(" ")}>
            Deliver what customers want, when and how they want it with our web design app suite.
          </div>
          <div className={marginStyles.block2rem}></div>
          <Button text={"Discover more"} />
        </BoxFull>
      </Container>

      <Container>
        <BoxSmall background={"linear-gradient(45deg, #b800ff -60%, #ff9990ef, #f6ff00 200%)"}>
          <div>
            <div className={[textStyles.text16, textStyles.dark].join(" ")}>WEB DESIGN APP SUITE</div>
            <div className={[textStyles.text24, marginStyles.block1rem, textStyles.bold].join(" ")}>
              All-in-one solution.
            </div>
            <div className={[textStyles.text16, marginStyles.block1rem].join(" ")}>
              Our web design app suite covers a wide range of customer experience needs.
            </div>
          </div>
        </BoxSmall>
        <BoxSmall background={"linear-gradient(45deg, #00aaff -60%, #ff6cc4ef, #f6ff00 200%)"}>
          <div>
            <div className={[textStyles.text16, textStyles.dark].join(" ")}>WEB DESIGN TRENDS 2023</div>
            <div className={[textStyles.text24, marginStyles.block1rem, textStyles.bold].join(" ")}>
              Embrace the latest trends.
            </div>
            <div className={[textStyles.text16, marginStyles.block1rem].join(" ")}>
              Discover how creative brands lead the way in the digital economy.
            </div>
          </div>
        </BoxSmall>
        <BoxSmall background={"#ff6cc4ef"}>
          <div>
            <div className={[textStyles.text16, textStyles.bold, textStyles.underline].join(" ")}>
              Explore our web design apps
            </div>
            <div className={[textStyles.text14, marginStyles.block1rem].join(" ")}>Web Design Suite free trial</div>
            <div className={[textStyles.text14, marginStyles.block1rem].join(" ")}>See plans and pricing</div>
            <div className={[textStyles.text16, textStyles.bold, textStyles.underline].join(" ")}>
              See what you can create
            </div>
            <div className={[textStyles.text14, marginStyles.block1rem].join(" ")}>Responsive web design</div>
            <div className={[textStyles.text14, marginStyles.block1rem].join(" ")}>Stunning graphic design</div>
            <div className={[textStyles.text14, marginStyles.block1rem].join(" ")}>Engaging video content</div>
            <div className={[textStyles.text14, marginStyles.block1rem].join(" ")}>Creative illustration work</div>
            <div className={[textStyles.text14, marginStyles.block1rem].join(" ")}>Intuitive UI and UX design</div>
            <div className={[textStyles.text14, marginStyles.block1rem].join(" ")}>Immersive 3D and AR experiences</div>
          </div>
        </BoxSmall>
      </Container>
    </div>
  );
};

export default Features;
