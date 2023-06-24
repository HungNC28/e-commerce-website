import classes from "./Footer.module.css";

import Card from "../UI/Card";
import { FooterListData } from "../../shared/const";

function Footer() {
  return (
    <div className={classes.Footer}>
      <Card>
        <div className={classes.FooterContent}>
          {/* dùng map để lấy nội dung của từng cột */}
          {FooterListData.map((item, index) => (
            <div key={index}>
              <p>{item.title}</p>
              {/* dùng map lấy từng phần tử của từng cột */}
              {item.content.map((e) => (
                <div className={classes.FooterItem} key={e}>
                  <a href="#">{e}</a>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default Footer;
