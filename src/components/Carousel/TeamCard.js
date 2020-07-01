import React, { Component } from "react";

class TeamCard extends Component {
  render() {
    return (
      <>
        <div class="">
          <div class="team_box wow fadeInUp">
            <div class="listghor_img team_img">
              <img src="assets/images/team_9.jpg" class="img-fluid" alt="" />
              <div class="team_social">
                <ul>
                  <li>
                    <a href="#">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="team_info">
              <div class="team_text">
                <h4>Ronald M. Steil</h4>
                <p>CEO & Funder</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TeamCard;
