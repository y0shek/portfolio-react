import React from "react";
import bhff from "../../images/laurels/bhff.png";
import accolade from "../../images/laurels/accolade.png";
import dsoff from "../../images/laurels/dsoff.png";
import festigious from "../../images/laurels/festigious.png";
import lacf from "../../images/laurels/lacf.png";
import vegas from "../../images/laurels/vegas.png";

import "./style.css";

const awardsData = [
  {
    title: "Official Selection - Black Hills Film Festival",
    link: "https://www.imdb.com/title/tt2733432/?ref_=fn_al_tt_1",
    src: bhff
  },
  {
    title: "Winner - Award of Merit - Accolade Global Film Festival",
    link: "https://www.imdb.com/title/tt3681356/",
    src: accolade
  },
  {
    title:
      "Winner of the Month - Best Screenwriter - Direct Short Online Film Festival",
    link: "https://www.imdb.com/title/tt3681356/",
    src: dsoff
  },
  {
    title:
      "Winner - Honorable Mention - Festigious International Film Festival, Los Angeles",
    link: "https://www.imdb.com/title/tt3681356/",
    src: festigious
  },
  {
    title: "Semi-Finalist - Los Angeles Cinefest",
    link: "https://www.imdb.com/title/tt3681356/",
    src: lacf
  },
  {
    title: "Best Duo - Award of Prestige",
    link: "https://www.imdb.com/title/tt3681356/",
    src: vegas
  }
];

export default class Awards extends React.Component {
  render() {
    return (
      <div className="awards">
        {awardsData.map((award, i) => {
          return (
            <a key={i} href={award.link} target="_blank">
              <img
                className={
                  this.props.atTop
                    ? "awards__laurel"
                    : "awards__laurel awards__laurel--scrolled"
                }
                alt={award.title}
                src={award.src}
              />
            </a>
          );
        })}
      </div>
    );
  }
}
