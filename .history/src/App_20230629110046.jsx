import React from "react";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Bottombar from "./components/Bottombar";
import BoxFull from "./components/BoxFull";
import BoxMedium from "./components/BoxMedium";
import BoxSmall from "./components/BoxSmall";
import Button from "./components/Button";
import background from "./assets/images/0.jpg";
import image0 from "./assets/images/image0.png";
import image1 from "./assets/images/image1.png";
import image2 from "./assets/images/image2.png";
import image3 from "./assets/images/image3.png";
import textStyles from "./css/Text.module.css";
import marginStyles from "./css/Margin.module.css";
import boxStyles from "./css/Box.module.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Container style={{ paddingInline: 0 }}>
        <BoxFull background={"linear-gradient(45deg, #ff8000 0%, #ffbb00, #00ffdd 100%)"}>
          <div className={[textStyles.text36, textStyles.light].join(" ")}>Creative plans. Designed for you.</div>
          <div className={marginStyles.block2rem}></div>
          <div className={[textStyles.text20, textStyles.light].join(" ")}>
            Explore video, photo, design, and more with a Creative Cloud plan that works for you.
          </div>
          <div className={marginStyles.block2rem}></div>
          <Button text={"See all plans"} />
        </BoxFull>
      </Container>
      <Container>
        <BoxSmall background={"var(--orange-100)"}>
          <div>
            <div className={textStyles.text16}>NEW IN ILLUSTRATOR</div>
            <div className={[textStyles.text24, marginStyles.block1rem].join(" ")}>Recolor your world.</div>
            <div className={textStyles.text16}></div>
            With simple text prompts and Generative Recolor (beta), unlock endless color combinations in seconds. Dream
            Bigger.
          </div>
          <img
            className={boxStyles.image}
            src={image1}
            style={{ width: "100%", right: "0%", position: "absolute" }}
            alt=""
          />
        </BoxSmall>
        <BoxSmall background={"linear-gradient(135deg ,#ff0069, #ff7f00)"}>
          <div>
            <div className={[textStyles.text24, textStyles.light].join(" ")}>Level up with Adobe Express.</div>
            <div className={[textStyles.text16, marginStyles.block1rem, textStyles.light].join(" ")}>
              Flyers. TikToks. Reels. Create easier. Dream Bigger. With Adobe Firefly generative AI and the new Adobe
              Express.
            </div>
            <div className={[textStyles.text16, textStyles.light].join(" ")}>Join the free beta</div>
          </div>
          <img
            className={boxStyles.image}
            src={image0}
            style={{ width: "36%", left: "55%", position: "absolute" }}
            alt=""
          />
        </BoxSmall>
        <BoxSmall background={"var(--purple-100)"}>
          <div>
            <div className={[textStyles.text16, textStyles.bold, textStyles.underline].join(" ")}>
              Explore our creative apps
            </div>
            <div className={[textStyles.text14, marginStyles.block1rem].join(" ")}>
              Creative Cloud All Apps free trial
            </div>
            <div className={[textStyles.text14, marginStyles.block1rem].join(" ")}>See plans and pricing</div>
            <div className={[textStyles.text16, textStyles.bold, textStyles.underline].join(" ")}>
              See what you can do
            </div>
            <div className={[textStyles.text14, marginStyles.block1rem].join(" ")}>Photography</div>
            <div className={[textStyles.text14, marginStyles.block1rem].join(" ")}>Graphic design</div>
            <div className={[textStyles.text14, marginStyles.block1rem].join(" ")}>Video</div>
            <div className={[textStyles.text14, marginStyles.block1rem].join(" ")}>Illustration</div>
            <div className={[textStyles.text14, marginStyles.block1rem].join(" ")}>UI and UX</div>
            <div className={[textStyles.text14, marginStyles.block1rem].join(" ")}>3D and AR</div>
          </div>
        </BoxSmall>
      </Container>
      <Container>
        <BoxMedium background={image2}>
          <div>
            <div className={[textStyles.text24, textStyles.light].join(" ")}>Level up with Adobe Express.</div>
            <div className={[textStyles.text16, marginStyles.block1rem, textStyles.light].join(" ")}>
              Flyers. TikToks. Reels. Create easier. Dream Bigger. With Adobe Firefly generative AI and the new Adobe
              Express.
            </div>
          </div>
        </BoxMedium>
        <BoxSmall background={"linear-gradient(45deg, #ff00f6 -60%, #00ffcc, #46ff00 200%)"}>
          <div>
            <div className={[textStyles.text24, textStyles.dark].join(" ")}>Level up with Adobe Express.</div>
            <div className={[textStyles.text16, marginStyles.block1rem].join(" ")}>
              Flyers. TikToks. Reels. Create easier. Dream Bigger. With Adobe Firefly generative AI and the new Adobe
              Express.
            </div>
          </div>
        </BoxSmall>
      </Container>
      <Container style={{ paddingInline: 0 }}>
        <BoxFull background={"linear-gradient(45deg, #ff00f6 0%, #00ffcc, #46ff00 200%)"}>
          <div className={[textStyles.text36, textStyles.light].join(" ")}>Work smarter with Adobe Acrobat Sign.</div>
          <div className={marginStyles.block2rem}></div>
          <div className={[textStyles.text20, textStyles.light].join(" ")}>
            Collect signatures and sign documents faster than ever, so you can spend more time doing what you do best.
          </div>
          <div className={marginStyles.block2rem}></div>
          <Button text={"See all plans"} />
        </BoxFull>
      </Container>
      <Container>
        <BoxSmall background={"linear-gradient(45deg, #ff00f6 -60%, #00ffcc, #46ff00 200%)"}>
          <div>
            <div className={[textStyles.text16, textStyles.dark].join(" ")}>ACROBAT READER MOBILE APP</div>
            <div className={[textStyles.text24, marginStyles.block1rem].join(" ")}>Work now works wherever.</div>
            <div className={[textStyles.text16, marginStyles.block1rem].join(" ")}>
              With the Acrobat Reader mobile app, your smartphone is now a serious business tool.
            </div>
          </div>
        </BoxSmall>
        <BoxSmall background={"linear-gradient(45deg, #ff00f6 -60%, #00ffcc, #46ff00 200%)"}>
          <div>
            <div className={[textStyles.text16, textStyles.dark].join(" ")}>ADOBE DOCUMENT CLOUD FOR BUSINESS</div>
            <div className={[textStyles.text24, marginStyles.block1rem].join(" ")}>PDFs keep work flowing.</div>
            <div className={[textStyles.text16, marginStyles.block1rem].join(" ")}>
              Unite remote teams with Adobe Document Cloud for business.
            </div>
          </div>
        </BoxSmall>
        <BoxSmall background={"linear-gradient(45deg, #ff00f6 -60%, #00ffcc, #46ff00 200%)"}>
        <div>
            <div className={[textStyles.text16, textStyles.bold, textStyles.underline].join(" ")}>
              Explore our creative apps
            </div>
            <div className={[textStyles.text14, marginStyles.block1rem].join(" ")}>
              Creative Cloud All Apps free trial
            </div>
            <div className={[textStyles.text14, marginStyles.block1rem].join(" ")}>See plans and pricing</div>
            <div className={[textStyles.text16, textStyles.bold, textStyles.underline].join(" ")}>
              See what you can do
            </div>
            <div className={[textStyles.text14, marginStyles.block1rem].join(" ")}>Photography</div>
            <div className={[textStyles.text14, marginStyles.block1rem].join(" ")}>Graphic design</div>
            <div className={[textStyles.text14, marginStyles.block1rem].join(" ")}>Video</div>
            <div className={[textStyles.text14, marginStyles.block1rem].join(" ")}>Illustration</div>
            <div className={[textStyles.text14, marginStyles.block1rem].join(" ")}>UI and UX</div>
            <div className={[textStyles.text14, marginStyles.block1rem].join(" ")}>3D and AR</div>
          </div>
        </BoxSmall>
      </Container>
      <Container style={{ paddingInline: 0 }}>
        <BoxFull background={"linear-gradient(45deg, #ff00f6 0%, #00ffcc, #46ff00 200%)"}>
          <div className={[textStyles.text36, textStyles.light].join(" ")}>ADOBE EXPERIENCE CLOUD</div>
          <div className={marginStyles.block2rem}></div>
          <div className={[textStyles.text20, textStyles.light].join(" ")}>
          Fuel greater customer experiences.
          </div>
          <div className={[textStyles.text20, textStyles.light].join(" ")}>
          Fuel greater customer experiences.
          </div>
          <div className={marginStyles.block2rem}></div>
          <Button text={"See all plans"} />
        </BoxFull>
      </Container>
      <Container>
        <BoxSmall background={"linear-gradient(45deg, #ff00f6 -60%, #00ffcc, #46ff00 200%)"}>
          <div>
            <div className={[textStyles.text24, textStyles.dark].join(" ")}>Level up with Adobe Express.</div>
            <div className={[textStyles.text16, marginStyles.block1rem].join(" ")}>
              Flyers. TikToks. Reels. Create easier. Dream Bigger. With Adobe Firefly generative AI and the new Adobe
              Express.
            </div>
          </div>
        </BoxSmall>
        <BoxSmall background={"linear-gradient(45deg, #ff00f6 -60%, #00ffcc, #46ff00 200%)"}>
          <div>
            <div className={[textStyles.text24, textStyles.dark].join(" ")}>Level up with Adobe Express.</div>
            <div className={[textStyles.text16, marginStyles.block1rem].join(" ")}>
              Flyers. TikToks. Reels. Create easier. Dream Bigger. With Adobe Firefly generative AI and the new Adobe
              Express.
            </div>
          </div>
        </BoxSmall>
        <BoxSmall background={"linear-gradient(45deg, #ff00f6 -60%, #00ffcc, #46ff00 200%)"}>
          <div>
            <div className={[textStyles.text24, textStyles.dark].join(" ")}>Level up with Adobe Express.</div>
            <div className={[textStyles.text16, marginStyles.block1rem].join(" ")}>
              Flyers. TikToks. Reels. Create easier. Dream Bigger. With Adobe Firefly generative AI and the new Adobe
              Express.
            </div>
          </div>
        </BoxSmall>
      </Container>
      <Bottombar />
    </div>
  );
};

export default App;
