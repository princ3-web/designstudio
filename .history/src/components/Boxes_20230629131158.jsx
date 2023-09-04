import React from 'react';
import Container from "./Container";
import BoxFull from "./BoxFull";
import BoxMedium from "./BoxMedium";
import BoxSmall from "./BoxSmall";
import Button from "./Button";
import background from "../assets/images/0.jpg";
import image0 from "../assets/images/image0.png";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import textStyles from "../css/Text.module.css";
import marginStyles from "../css/Margin.module.css";
import boxStyles from "../css/Box.module.css";

const Boxes = () => {
  return (
    <div>
         <Container style={{ paddingInline: 0 }}>
        <BoxFull background={"linear-gradient(45deg, #ff8000 0%, #ffbb00, #00ffdd 100%)"}>
          <div className={[textStyles.text42, textStyles.light, textStyles.bold].join(" ")}>
            Creative plans. Designed for you.
          </div>
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
            <div className={[textStyles.text24, marginStyles.block1rem, textStyles.bold].join(" ")}>
              Recolor your world.
            </div>
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
            <div className={[textStyles.text24, textStyles.light, textStyles.bold].join(" ")}>
              Level up with Adobe Express.
            </div>
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
            <div className={[textStyles.text30, textStyles.light, textStyles.bold].join(" ")}>
              Video editing that’s always a cut above.
            </div>
            <div className={[textStyles.text16, marginStyles.block1rem, textStyles.light].join(" ")}>
              Take your content further and stand out with the next-level power of Premiere Pro.
            </div>
            <div className={[textStyles.text16, textStyles.light, textStyles.bold].join(" ")}>Go to Premiere Pro</div>
          </div>
        </BoxMedium>
        <BoxSmall background={"linear-gradient(45deg, #ff00f6 -60%, #00ffcc, #46ff00 200%)"}>
          <div>
            <div className={[textStyles.text24, textStyles.dark, textStyles.bold].join(" ")}>
              Level up with Adobe Express.
            </div>
            <div className={[textStyles.text16, marginStyles.block1rem].join(" ")}>
              Flyers. TikToks. Reels. Create easier. Dream Bigger. With Adobe Firefly generative AI and the new Adobe
              Express.
            </div>
          </div>
        </BoxSmall>
      </Container>
      <Container style={{ paddingInline: 0 }}>
        <BoxFull background={"linear-gradient(45deg, #00ff0d -60%, #ffbb00, #ff0000 200%)"}>
          <div className={[textStyles.text36, textStyles.light, textStyles.bold].join(" ")}>
            Work smarter with Adobe Acrobat Sign.
          </div>
          <div className={marginStyles.block2rem}></div>
          <div className={[textStyles.text20, textStyles.light].join(" ")}>
            Collect signatures and sign documents faster than ever, so you can spend more time doing what you do best.
          </div>
          <div className={marginStyles.block2rem}></div>
          <Button text={"See all plans"} />
        </BoxFull>
      </Container>
      <Container>
        <BoxSmall background={"linear-gradient(45deg, #00ff0d -30%, #f200ff, #0077ff 200%)"}>
          <div>
            <div className={[textStyles.text16, textStyles.dark].join(" ")}>ACROBAT READER MOBILE APP</div>
            <div className={[textStyles.text24, marginStyles.block1rem, textStyles.bold].join(" ")}>
              Work now works wherever.
            </div>
            <div className={[textStyles.text16].join(" ")}>
              With the Acrobat Reader mobile app, your smartphone is now a serious business tool.
            </div>
          </div>
        </BoxSmall>
        <BoxSmall background={"linear-gradient(45deg, #d4ff00 -60%, #0099ff, #0077ff 200%)"}>
          <div>
            <div className={[textStyles.text16, textStyles.dark].join(" ")}>ADOBE DOCUMENT CLOUD FOR BUSINESS</div>
            <div className={[textStyles.text24, marginStyles.block1rem, textStyles.bold].join(" ")}>
              PDFs keep work flowing.
            </div>
            <div className={[textStyles.text16].join(" ")}>
              Unite remote teams with Adobe Document Cloud for business.
            </div>
          </div>
        </BoxSmall>
        <BoxSmall background={"#ff8400ef"}>
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
        <BoxFull background={"linear-gradient(45deg, #c800ff -60%, #ff8400ef, #f6ff00 200%)"}>
          <div className={[textStyles.text16, textStyles.light].join(" ")}>ADOBE EXPERIENCE CLOUD</div>
          <div className={marginStyles.block2rem}></div>
          <div className={[textStyles.text42, textStyles.light, textStyles.bold].join(" ")} style={{ width: "50%" }}>
            Fuel greater customer experiences.
          </div>
          <div className={marginStyles.block2rem}></div>
          <div className={[textStyles.text20, textStyles.light].join(" ")}>
            Give customers what they need, when and how they want it.
          </div>
          <div className={marginStyles.block2rem}></div>
          <Button text={"Learn more"} />
        </BoxFull>
      </Container>
      <Container>
        <BoxSmall background={"linear-gradient(45deg, #b800ff -60%, #ff9990ef, #f6ff00 200%)"}>
          <div>
            <div className={[textStyles.text16, textStyles.dark].join(" ")}>ADOBE EXPERIENCE CLOUD</div>
            <div className={[textStyles.text24, marginStyles.block1rem, textStyles.bold].join(" ")}>End to end.</div>
            <div className={[textStyles.text16, marginStyles.block1rem].join(" ")}>
              Experience Cloud products cover your range of customer experience needs.
            </div>
          </div>
        </BoxSmall>
        <BoxSmall background={"linear-gradient(45deg, #00aaff -60%, #ff6cc4ef, #f6ff00 200%)"}>
          <div>
            <div className={[textStyles.text16, textStyles.dark].join(" ")}>ADOBE 2023 DIGITAL TRENDS</div>
            <div className={[textStyles.text24, marginStyles.block1rem, textStyles.bold].join(" ")}>
              Today’s trends in focus.
            </div>
            <div className={[textStyles.text16, marginStyles.block1rem].join(" ")}>
              See how brands that embrace creativity pull ahead in the digital economy.
            </div>
          </div>
        </BoxSmall>
        <BoxSmall background={"#ff6cc4ef"}>
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
    </div>
  )
}

export default Boxes;