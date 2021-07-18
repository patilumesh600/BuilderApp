/**
 *
 * Visits
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import * as RBS from 'react-bootstrap';
import {
  faChevronCircleRight,
  faPlus,
  faSearch,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import flatImg from '../../images/backgrounds/bg4.jpg';
import saga from './saga';
import reducer from './reducer';
import makeSelectVisits from './selectors';
import './visits.css';

export function Visits() {
  useInjectReducer({ key: 'visits', reducer });
  useInjectSaga({ key: 'visits', saga });

  return (
    <div id="visitContainer">
      <RBS.Container fluid>
        <RBS.Row>
          <RBS.Col md={6} className="visitListSec">
            <RBS.Row>
              <RBS.Col md={7} xs={10}>
                <RBS.InputGroup size="sm">
                  <RBS.InputGroup.Prepend>
                    <RBS.InputGroup.Text id="basic-addon2" className="bg-light">
                      {' '}
                      <FontAwesomeIcon icon={faSearch} />{' '}
                    </RBS.InputGroup.Text>
                  </RBS.InputGroup.Prepend>
                  <RBS.FormControl
                    placeholder="Search by Title,Date or Status"
                    aria-label="Search by Title,Date or Status"
                    aria-describedby="basic-addon2"
                  />
                </RBS.InputGroup>
              </RBS.Col>
              <RBS.Col md={3} className="d-none d-md-inline" />
              <RBS.Col md={2} className="text-right" xs={2}>
                <RBS.Button variant="outline-primary" size="sm">
                  {' '}
                  <FontAwesomeIcon icon={faPlus} />{' '}
                  <span className="d-none d-md-inline">Add</span>
                </RBS.Button>
              </RBS.Col>
            </RBS.Row>
            <hr className="hrgray" />
            <RBS.Row>
              <RBS.Col md={12} className="dateSec">
                12-Jun-2021
              </RBS.Col>
              <div className="clearfix" />
              <RBS.Col md={12}>
                <div className="visitRowSec">
                  <RBS.Row>
                    <RBS.Col md={9} xs={12}>
                      <div className="visitTime">
                        <div className="text-muted">
                          {' '}
                          1:20 PM &nbsp;
                          <span className="text-warning text-center  d-inline-block d-md-none">
                            <b>Pending</b>
                          </span>
                        </div>
                      </div>
                      <div className="clearfix" />
                      <div className="visitReleatedTo">
                        Customer visit - for floor plan discussion
                      </div>
                    </RBS.Col>
                    <RBS.Col md={2} className="valignTxt d-none d-md-block">
                      <div className="text-warning text-center">Pending</div>
                    </RBS.Col>
                    <RBS.Col
                      md={1}
                      className="text-right valignTxt d-none d-md-block"
                    >
                      <FontAwesomeIcon icon={faChevronCircleRight} />
                    </RBS.Col>
                  </RBS.Row>
                </div>
              </RBS.Col>
            </RBS.Row>

            <RBS.Row>
              <RBS.Col md={12} className="dateSec">
                12-May-2021
              </RBS.Col>
              <div className="clearfix" />
              <RBS.Col md={12}>
                <div className="visitRowSec">
                  <RBS.Row>
                    <RBS.Col md={9} xs={12}>
                      <div className="visitTime">
                        <div className="text-muted">
                          {' '}
                          1:20 PM &nbsp;
                          <span className="text-success text-center  d-inline-block d-md-none">
                            <b>Completed</b>
                          </span>
                        </div>
                      </div>
                      <div className="clearfix" />
                      <div className="visitReleatedTo">
                        Brick work completed for 10th, 11th and 12th floor.
                      </div>
                    </RBS.Col>
                    <RBS.Col md={2} className="valignTxt d-none d-md-block">
                      <div className="text-success text-center">Completed</div>
                    </RBS.Col>
                    <RBS.Col
                      md={1}
                      className="text-right valignTxt d-none d-md-block"
                    >
                      <FontAwesomeIcon icon={faChevronCircleRight} />
                    </RBS.Col>
                  </RBS.Row>
                </div>
              </RBS.Col>
              <div className="clearfix" />
              <RBS.Col md={12}>
                <div className="visitRowSec">
                  <RBS.Row>
                    <RBS.Col md={9} xs={12}>
                      <div className="visitTime">
                        <div className="text-muted">
                          {' '}
                          1:20 PM &nbsp;
                          <span className="text-success text-center  d-inline-block d-md-none">
                            <b>Completed</b>
                          </span>
                        </div>
                      </div>
                      <div className="clearfix" />
                      <div className="visitReleatedTo">
                        Brick work completed for 10th, 11th and 12th floor.
                      </div>
                    </RBS.Col>
                    <RBS.Col md={2} className="valignTxt d-none d-md-block">
                      <div className="text-success text-center">Completed</div>
                    </RBS.Col>
                    <RBS.Col
                      md={1}
                      className="text-right valignTxt d-none d-md-block"
                    >
                      <FontAwesomeIcon icon={faChevronCircleRight} />
                    </RBS.Col>
                  </RBS.Row>
                </div>
              </RBS.Col>

              <div className="clearfix" />
              <RBS.Col md={12}>
                <div className="visitRowSec">
                  <RBS.Row>
                    <RBS.Col md={9} xs={12}>
                      <div className="visitTime">
                        <div className="text-muted">
                          {' '}
                          1:20 PM &nbsp;
                          <span className="text-success text-center  d-inline-block d-md-none">
                            <b>Completed</b>
                          </span>
                        </div>
                      </div>
                      <div className="clearfix" />
                      <div className="visitReleatedTo">
                        Brick work completed for 10th, 11th and 12th floor.
                      </div>
                    </RBS.Col>
                    <RBS.Col md={2} className="valignTxt d-none d-md-block">
                      <div className="text-success text-center">Completed</div>
                    </RBS.Col>
                    <RBS.Col
                      md={1}
                      className="text-right valignTxt d-none d-md-block"
                    >
                      <FontAwesomeIcon icon={faChevronCircleRight} />
                    </RBS.Col>
                  </RBS.Row>
                </div>
              </RBS.Col>
            </RBS.Row>
            <RBS.Row>
              <RBS.Col md={12} className="dateSec">
                12-Feb-2021
              </RBS.Col>
              <div className="clearfix" />
              <RBS.Col md={12}>
                <div className="visitRowSec">
                  <RBS.Row>
                    <RBS.Col md={9} xs={12}>
                      <div className="visitTime">
                        <div className="text-muted">
                          {' '}
                          1:20 PM &nbsp;
                          <span className="text-success text-center  d-inline-block d-md-none">
                            <b>Completed</b>
                          </span>
                        </div>
                      </div>
                      <div className="clearfix" />
                      <div className="visitReleatedTo">
                        Brick work completed for 10th, 11th and 12th floor.
                      </div>
                    </RBS.Col>
                    <RBS.Col md={2} className="valignTxt d-none d-md-block">
                      <div className="text-success text-center">Completed</div>
                    </RBS.Col>
                    <RBS.Col
                      md={1}
                      className="text-right valignTxt d-none d-md-block"
                    >
                      <FontAwesomeIcon icon={faChevronCircleRight} />
                    </RBS.Col>
                  </RBS.Row>
                </div>
              </RBS.Col>
              <div className="clearfix" />
              <RBS.Col md={12}>
                <div className="visitRowSec">
                  <RBS.Row>
                    <RBS.Col md={9} xs={12}>
                      <div className="visitTime">
                        <div className="text-muted">
                          {' '}
                          1:20 PM &nbsp;
                          <span className="text-success text-center  d-inline-block d-md-none">
                            <b>Completed</b>
                          </span>
                        </div>
                      </div>
                      <div className="clearfix" />
                      <div className="visitReleatedTo">
                        Brick work completed for 10th, 11th and 12th floor.
                      </div>
                    </RBS.Col>
                    <RBS.Col md={2} className="valignTxt d-none d-md-block">
                      <div className="text-success text-center">Completed</div>
                    </RBS.Col>
                    <RBS.Col
                      md={1}
                      className="text-right valignTxt d-none d-md-block"
                    >
                      <FontAwesomeIcon icon={faChevronCircleRight} />
                    </RBS.Col>
                  </RBS.Row>
                </div>
              </RBS.Col>

              <div className="clearfix" />
              <RBS.Col md={12}>
                <div className="visitRowSec">
                  <RBS.Row>
                    <RBS.Col md={9} xs={12}>
                      <div className="visitTime">
                        <div className="text-muted">
                          {' '}
                          1:20 PM &nbsp;
                          <span className="text-success text-center  d-inline-block d-md-none">
                            <b>Completed</b>
                          </span>
                        </div>
                      </div>
                      <div className="clearfix" />
                      <div className="visitReleatedTo">
                        Brick work completed for 10th, 11th and 12th floor.
                      </div>
                    </RBS.Col>
                    <RBS.Col md={2} className="valignTxt d-none d-md-block">
                      <div className="text-success text-center">Completed</div>
                    </RBS.Col>
                    <RBS.Col
                      md={1}
                      className="text-right valignTxt d-none d-md-block"
                    >
                      <FontAwesomeIcon icon={faChevronCircleRight} />
                    </RBS.Col>
                  </RBS.Row>
                </div>
              </RBS.Col>
            </RBS.Row>
          </RBS.Col>
          <RBS.Col md={6} className="visitDetailsSec">
            <RBS.Row>
              <div className="visitDetailCont">
                <RBS.Row>
                  <RBS.Col md={11} xs={10} className="visitDateSec">
                    12-Jun-2021
                  </RBS.Col>
                  <RBS.Col md={1} xs={2} className="visitCloseBtn">
                    <FontAwesomeIcon icon={faTimes} />
                  </RBS.Col>
                </RBS.Row>
                <hr className="hrgray" />
                <div className="clearfix" />
                <RBS.Row className="lh-2">
                  <RBS.Col md={3} className="visitLbl">
                    Visit For :
                  </RBS.Col>
                  <RBS.Col md={9} className="visitDesc">
                    Scheduled after brick work completion.
                  </RBS.Col>
                </RBS.Row>
                <RBS.Row className="lh-2">
                  <RBS.Col md={3} className="visitLbl">
                    Attended By :
                  </RBS.Col>
                  <RBS.Col md={9} className="visitDesc">
                    Mr. Arvind Pawar (Builder Agent)
                  </RBS.Col>
                </RBS.Row>
                <RBS.Row className="lh-2">
                  <RBS.Col md={3} className="visitLbl">
                    Visit Time :
                  </RBS.Col>
                  <RBS.Col md={9} className="visitDesc">
                    1:20 PM
                  </RBS.Col>
                </RBS.Row>
                <RBS.Row className="lh-2">
                  <RBS.Col md={3} className="visitLbl">
                    Notes :
                  </RBS.Col>
                  <RBS.Col md={9} className="visitDesc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Magna fringilla urna porttitor rhoncus dolor purus
                    non enim. Aliquet risus feugiat in ante metus dictum at
                    tempor. Posuere ac ut consequat semper viverra. Lacus vel
                    facilisis volutpat est velit. Viverra justo nec ultrices dui
                    sapien. Sed id semper risus in hendrerit gravida. Facilisis
                    sed odio morbi quis commodo odio. Posuere morbi leo urna
                    molestie at elementum eu. Dui sapien eget mi proin sed
                    libero enim. Sed tempus urna et pharetra pharetra. Arcu
                    bibendum at varius vel pharetra vel turpis nunc eget. Nec
                    ullamcorper sit amet risus. Neque egestas congue quisque
                    egestas diam. A cras semper auctor neque vitae tempus quam
                    pellentesque.
                  </RBS.Col>
                </RBS.Row>
                <RBS.Row className="lh-2">
                  <RBS.Col md={3} className="visitLbl">
                    Images :
                  </RBS.Col>
                  <RBS.Col md={9} className="visitDesc">
                    <RBS.Row>
                      <RBS.Col md={3} xs={4}>
                        <RBS.Image src={flatImg} height="80" width="80" />
                      </RBS.Col>
                      <RBS.Col md={3} xs={4}>
                        <RBS.Image src={flatImg} height="80" width="80" />
                      </RBS.Col>
                      <RBS.Col md={3} xs={4}>
                        <RBS.Image src={flatImg} height="80" width="80" />
                      </RBS.Col>
                      <RBS.Col md={3} xs={4}>
                        <RBS.Image src={flatImg} height="80" width="80" />
                      </RBS.Col>
                    </RBS.Row>
                  </RBS.Col>
                </RBS.Row>
              </div>
            </RBS.Row>
          </RBS.Col>
        </RBS.Row>
      </RBS.Container>
    </div>
  );
}

Visits.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  visits: makeSelectVisits(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Visits);
