import React, { Component } from "react";
import Form from "./form";
import $ from "jquery";
import Mobile from "./mobile-wbt";
import Team from "./team";

class WBT extends Component {
  render() {
    // Screen Size Finder
    $(function() {
      $(".hero").css({ height: $(window).height() });
      $(".hero-logo").css({ height: $(window).height() });

      $(window).bind("resize", function() {
        $(".hero").css({ height: $(window).height() });
        $(".hero-logo").css({ height: $(window).height() });
      });
    });
    // Screen Size Finder
    // Nav Component
    $(document).on("click", 'a[href^="#"]', function(event) {
      event.preventDefault();

      $("html, body").animate(
        {
          scrollTop: $($.attr(this, "href")).offset().top
        },
        500
      );
    });
    // Nav Component

    $(document).ready(function() {
      var scroll_start = 0;
      var startchange = $(".arrow-scroll");
      var offset = startchange.offset();

      $(document).scroll(function() {
        scroll_start = $(this).scrollTop();

        if (scroll_start > offset.top) {
          $(".header").css("background-color", "#000000");
          $(".header").css("opacity", ".85");
          $(".linkk").css("color", "white");
          $(".header-logo img").css("opacity", "1");
          $(".header-logo img").css("width", "150px");
          $(".header-logo img").css("margin-left", "22px");
        } else {
          $(".header").css("background-color", "transparent");
          $(".header-logo img").css("opacity", ".0");
        }
      });
    });

    // Nav Component

    // Magic Text
    var TxtRotate = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = "";
      this.tick();
      this.isDeleting = false;
    };

    TxtRotate.prototype.tick = function() {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

      var that = this;
      var delta = 300 - Math.random() * 100;

      if (this.isDeleting) {
        delta /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(function() {
        that.tick();
      }, delta);
    };

    window.onload = function() {
      var elements = document.getElementsByClassName("txt-rotate");
      for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute("data-rotate");
        var period = elements[i].getAttribute("data-period");
        if (toRotate) {
          new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
      }

      // Inject CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #667 }";
      document.body.appendChild(css);

      // Magic Text
    };

    return (
      <div className="desktop-wrapper">
        {/* Header Section */}

        <div className="header">
          <div className="nav-wrap">
            <div className="header-logo">
              <img src="/assets/wbt_logo.png" alt="WBT Logo" />
            </div>
          </div>
          <div className="header-links">
            <a className="links" href="#techno_link">
              TECHNOLOGY
            </a>
            <a className="links" href="#team_link">
              TEAM
            </a>
            <a className="links" href="#pfolio_link">
              PORTFOLIO
            </a>
            <a className="links" href="#contact_link">
              CONTACT
            </a>
          </div>
        </div>

        {/* Hero Section */}

        <div className="hero">
          <div className="hero-logo">
            <img src="/assets/wbt_logo.png" alt="WBT" id="hero-logo-wbt" />

            {/* JS Text */}

            <div className="space">
              <div className="magicspace" />
              <h1 className="magictext">
                <span
                  className="txt-rotate"
                  data-period="2000"
                  data-rotate="[ &quot;Hello, this is Christian and Oswaldo&quot;,
            &quot;Greeting you from an automated JS program&quot;, 
            &quot;We hope to create a utopian experience while working with you&quot;,
             &quot;www.webbuilderteam.com&quot;, &quot; &quot; ]"
                />
              </h1>
            </div>
            <img
              className="arrow-scroll"
              src="/assets/arrow.gif"
              alt="Scroll Down"
            />
          </div>
        </div>

        {/* Technology Section */}

        <div className="techno-grid tech" id="techno_link">
          <div className="techno-box">
            <img src="assets/smartphone.png" />
            <h1>RESPONSIVE WEBDESIGN</h1>
            <p>
              We think in a cross-medial way, to be able to assist you in all
              facets of media. We design and program our websites, incorporating
              the latest trends and techniques. We think for example of
              responsive sites to be able to serve your visitor on every
              platform, from mobile to PC.
            </p>
          </div>
          <div className="techno-box">
            <img src="assets/computer.png" />
            <h1>EFFECTIVE MARKETING</h1>
            <p>
              With our extensive knowledge on marketing, we device strategies
              tailored to fit your company's vision and needs. By keeping up
              with the up and coming technologies, we can assure the quality of
              work put into circulating your presence, is strong and impactful.
            </p>
          </div>
          <div className="techno-box">
            <img src="assets/photo-camera.png" />
            <h1>ORIGINAL PHOTOS</h1>
            <p>
              Being artists, we can provide unique and tasteful images, that
              will allow your company to stand out in a competitive environment.
              We shoot team portraits, office spaces, buildings, landscapes, you
              name it. All in RAW format to maximize malleability.
            </p>
          </div>
          <div className="techno-box">
            <img src="assets/camcorder.png" />
            <h1>CUSTOM FILM</h1>
            <p>
              Want to make your website more dynamic? Why not implement a video
              into your site! Movement has the power to add a sense of depth
              into your website, also, makes the experience more memorable which
              can and will separate you from the pack.
            </p>
          </div>
        </div>

        {/* Spacer */}

        <div className="spacer" id="team_link">
          <div className="spacer-text">
            <h1>TEAM</h1>
            <h2>MEET THE TEAM</h2>
          </div>
        </div>

        {/* Team Section */}

        <Team />

        {/* Spacer */}

        <div className="spacer" id="pfolio_link">
          <div className="spacer-text">
            <h1>PORTFOLIO</h1>
            <h2>A SELECTION FROM OUR WORK</h2>
          </div>
        </div>

        {/* Portfolio Section */}

        <div className="portfolio">
          <div className="portfolio-wrapper">
            <div className="portfolio-media">
              <div className="portfolio-layer">
                <a href="www.komeparnell.com" target="_blank">
                  <p>+ Kome Parnell</p>
                </a>
              </div>
              <img src="/assets/folio1.jpg" alt="" />
            </div>
            <div className="portfolio-media">
              <div className="portfolio-layer">
                <a href="www.trippyroads.com" target="_blank">
                  <p>+ Trippy Roads</p>
                </a>
              </div>
              <img src="/assets/folio2.jpg" alt="" />
            </div>
          </div>
        </div>

        {/* Spacer */}

        <div className="spacer">
          <div className="spacer-text">
            <h1>CONTACT</h1>
            <h2>FEEL FREE TO REACH OUT</h2>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact_link" />
        {/* <Form /> */}
        <Form/>
        {/* Spacer */}
        <div className="spacer-last">
          <div className="spacer-text-last">
            <p>&copy; WBT 2018 All rights reserved</p>
          </div>
        </div>
        <Mobile />
      </div>
    );
  }
}

export default WBT;
