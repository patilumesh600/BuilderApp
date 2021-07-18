/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unused-prop-types */
/**
 *
 * BusinessSearch
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import FilterComp from 'components/BusinessFilter';

import CallbackRequest from 'components/CallbackRequest';

import * as RBS from 'react-bootstrap';
import { faCouch, faPaintRoller, faCarrot, faTruckLoading, faCapsules, faShoppingBasket, faWrench, faCar, faCocktail, faClinicMedical, faGavel, faPhoneAlt, faUniversity, faTshirt, faMobileAlt, faSchool, faPlug, faMicroscope, faPhotoVideo, faSearch, faCrown, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Carousel from 'react-multi-carousel';
import saga from './saga';
import reducer from './reducer';
import makeSelectBusinessSearch from './selectors';
import 'react-multi-carousel/lib/styles.css';
import './searchResult.css';



export function BusinessSearch() {
  useInjectReducer({ key: 'businessSearch', reducer });
  useInjectSaga({ key: 'businessSearch', saga });

  const [modalShow, setModalShow] = useState(false);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 12,
      slidesToSlide: 10,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 3,
      arrows: false
    }
  };

  return <div id="searchContainer">
    <RBS.Container fluid>
      <RBS.Row className="searchHdr">
        <RBS.Col md={{ span: 8, offset: 2 }}>
          <RBS.InputGroup className="mb-2" size="sm">
            <RBS.FormControl
              placeholder="Search Business by Name, Category or Location"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <RBS.InputGroup.Append>
              <RBS.InputGroup.Text id="basic-addon2"><FontAwesomeIcon icon={faSearch} /> </RBS.InputGroup.Text>
            </RBS.InputGroup.Append>
          </RBS.InputGroup>
        </RBS.Col>
        <RBS.Col md={12}>
          <RBS.Row className="businessContainer">
            <RBS.Col md={12} className="pad-0">
              <Carousel responsive={responsive} arrows renderButtonGroupOutside>
                <div className="text-center businessTab">
                  <div className="businessIcon"><FontAwesomeIcon icon={faCouch} /></div>
                  <div className="clearfix"></div>
                  <div className="businessName" >Furniture</div>
                </div>
                <div className="text-center businessTab">
                  <div className="businessIcon"><FontAwesomeIcon icon={faPaintRoller} /></div>
                  <div className="clearfix"></div>
                  <div className="businessName" >Painters</div>
                </div>
                <div className="text-center businessTab">
                  <div className="businessIcon"><FontAwesomeIcon icon={faTruckLoading} /></div>
                  <div className="clearfix"></div>
                  <div className="businessName" >Transports</div>
                </div>
                <div className="text-center businessTab">
                  <div className="businessIcon"><FontAwesomeIcon icon={faShoppingBasket} /></div>
                  <div className="clearfix"></div>
                  <div className="businessName" >Grocery</div>
                </div>
                <div className="text-center businessTab">
                  <div className="businessIcon"><FontAwesomeIcon icon={faWrench} /></div>
                  <div className="clearfix"></div>
                  <div className="businessName" >Hardwares</div>
                </div>
                <div className="text-center businessTab">
                  <div className="businessIcon"><FontAwesomeIcon icon={faCapsules} /></div>
                  <div className="clearfix"></div>
                  <div className="businessName" >Medicals</div>
                </div>
                <div className="text-center businessTab">
                  <div className="businessIcon"><FontAwesomeIcon icon={faCar} /></div>
                  <div className="clearfix"></div>
                  <div className="businessName" >Garage</div>
                </div>
                <div className="text-center businessTab">
                  <div className="businessIcon"><FontAwesomeIcon icon={faCocktail} /></div>
                  <div className="clearfix"></div>
                  <div className="businessName" >Hotels</div>
                </div>
                <div className="text-center businessTab">
                  <div className="businessIcon"><FontAwesomeIcon icon={faClinicMedical} /></div>
                  <div className="clearfix"></div>
                  <div className="businessName" >Hospitals</div>
                </div>
                <div className="text-center businessTab">
                  <div className="businessIcon"><FontAwesomeIcon icon={faSchool} /></div>
                  <div className="clearfix"></div>
                  <div className="businessName" >Schools</div>
                </div>
                <div className="text-center businessTab">
                  <div className="businessIcon"><FontAwesomeIcon icon={faCarrot} /></div>
                  <div className="clearfix"></div>
                  <div className="businessName" >Vegetables</div>
                </div>

                <div className="text-center businessTab">
                  <div className="businessIcon"><FontAwesomeIcon icon={faUniversity} /></div>
                  <div className="clearfix"></div>
                  <div className="businessName" >Banks</div>
                </div>
                <div className="text-center businessTab">
                  <div className="businessIcon"><FontAwesomeIcon icon={faTshirt} /></div>
                  <div className="clearfix"></div>
                  <div className="businessName" >Clothing Stores</div>
                </div>
                <div className="text-center businessTab">
                  <div className="businessIcon"><FontAwesomeIcon icon={faMobileAlt} /></div>
                  <div className="clearfix"></div>
                  <div className="businessName" >Mobile Shoppee</div>
                </div>
                <div className="text-center businessTab">
                  <div className="businessIcon"><FontAwesomeIcon icon={faGavel} /></div>
                  <div className="clearfix"></div>
                  <div className="businessName" >Legal Advisor</div>
                </div>
                <div className="text-center businessTab">
                  <div className="businessIcon"><FontAwesomeIcon icon={faPlug} /></div>
                  <div className="clearfix"></div>
                  <div className="businessName" >Electronics</div>
                </div>
                <div className="text-center businessTab">
                  <div className="businessIcon"><FontAwesomeIcon icon={faMicroscope} /></div>
                  <div className="clearfix"></div>
                  <div className="businessName" >Pathology Labs</div>
                </div>
                <div className="text-center businessTab">
                  <div className="businessIcon"><FontAwesomeIcon icon={faPhotoVideo} /></div>
                  <div className="clearfix"></div>
                  <div className="businessName" >Photo Studio</div>
                </div>

              </Carousel>
            </RBS.Col>
          </RBS.Row>

        </RBS.Col>
      </RBS.Row>

      <RBS.Row className="searchResultSec">
        <RBS.Col md={2} className="filterSec pad-0 d-none d-md-block">
          <FilterComp />
        </RBS.Col>
        <RBS.Col md={10} className="resultSec">
          <RBS.Row>
            <RBS.Col md={10} className="searchResultTxt">Found 123 Results for Category "Furniture"</RBS.Col>
            <RBS.Col md={2}>
              <RBS.Form.Group controlId="exampleForm.ControlSelect1" className="mb-0">
                <RBS.Form.Control size="sm" as="select" className="sortCtrl">
                  <option>Relevance</option>
                  <option>Rating High To Low</option>
                  <option>Distance Near To Far</option>
                </RBS.Form.Control>
              </RBS.Form.Group>
            </RBS.Col>
          </RBS.Row>
          <hr className="hrgray" />
          <RBS.Row>
            <RBS.Col md={12} className="mb-1">
              <div className="businessSec">
                <RBS.Row>
                  <RBS.Col md={10}>
                    <div className="businessListNm">Royal Furnitures And Home Decor, Chikhali</div>
                    <div className="clearfix" />
                    <div className="businessGrp">
                      <RBS.Badge pill variant="warning"><FontAwesomeIcon className="text-dark" icon={faStar} /> 5 </RBS.Badge> &nbsp; &nbsp;
                      <RBS.Badge pill variant="dark"><FontAwesomeIcon className="text-warning" icon={faCrown} /> Preimium</RBS.Badge>
                    </div>
                    <div className="clearfix" />
                    <div className="businessInfo">
                      <small><FontAwesomeIcon icon={faPhoneAlt} /> : 9975463675 | <FontAwesomeIcon icon={faEnvelope} /> : rfAndDecor@gmail.com | <b>Distance :</b> 5 Km</small>
                    </div>
                  </RBS.Col>
                  <RBS.Col md={2} className="businessListAct">
                    <RBS.Button block variant="outline-primary" size="sm"  onClick={() => setModalShow(true)} ><FontAwesomeIcon icon={faPhoneAlt} /> Request callback</RBS.Button>
                  </RBS.Col>
                </RBS.Row>
              </div>
            </RBS.Col>
            <RBS.Col md={12} className="mb-1">
              <div className="businessSec">
                <RBS.Row>
                  <RBS.Col md={10}>
                    <div className="businessListNm">Jagdamba Home Decore, Jadhavwadi</div>
                    <div className="clearfix" />
                    <div className="businessGrp">
                      <RBS.Badge pill variant="warning"><FontAwesomeIcon className="text-dark" icon={faStar} /> 5 </RBS.Badge> &nbsp; &nbsp;
                      <RBS.Badge pill variant="dark"><FontAwesomeIcon className="text-warning" icon={faCrown} /> Preimium</RBS.Badge>
                    </div>
                    <div className="clearfix" />
                    <div className="businessInfo">
                      <small><FontAwesomeIcon icon={faPhoneAlt} /> : 9975463675 | <FontAwesomeIcon icon={faEnvelope} /> : rfAndDecor@gmail.com | <b>Distance :</b> 5 Km</small>
                    </div>
                  </RBS.Col>
                  <RBS.Col md={2} className="businessListAct">
                    <RBS.Button block variant="outline-primary" size="sm"  onClick={() => setModalShow(true)} ><FontAwesomeIcon icon={faPhoneAlt} /> Request callback</RBS.Button>
                  </RBS.Col>
                </RBS.Row>
              </div>
            </RBS.Col>
            <RBS.Col md={12} className="mb-1">
              <div className="businessSec">
                <RBS.Row>
                  <RBS.Col md={10}>
                    <div className="businessListNm"> WoodBlocks Furniture Studio, Jadhavwadi</div>
                    <div className="clearfix" />
                    <div className="businessGrp">
                      <RBS.Badge pill variant="warning"><FontAwesomeIcon className="text-dark" icon={faStar} /> 5 </RBS.Badge> &nbsp; &nbsp;
                      <RBS.Badge pill variant="dark"><FontAwesomeIcon className="text-warning" icon={faCrown} /> Preimium</RBS.Badge>
                    </div>
                    <div className="clearfix" />
                    <div className="businessInfo">
                      <small><FontAwesomeIcon icon={faPhoneAlt} /> : 9975463675 | <FontAwesomeIcon icon={faEnvelope} /> : rfAndDecor@gmail.com | <b>Distance :</b> 5 Km</small>
                    </div>
                  </RBS.Col>
                  <RBS.Col md={2} className="businessListAct">
                    <RBS.Button block variant="outline-primary" size="sm"  onClick={() => setModalShow(true)} ><FontAwesomeIcon icon={faPhoneAlt} /> Request callback</RBS.Button>
                  </RBS.Col>
                </RBS.Row>
              </div>
            </RBS.Col>
            <RBS.Col md={12} className="mb-1">
              <div className="businessSec">
                <RBS.Row>
                  <RBS.Col md={10}>
                    <div className="businessListNm"> Rajveer Home furnituees, Jadhavwadi</div>
                    <div className="clearfix" />
                    <div className="businessGrp">
                      <RBS.Badge pill variant="warning"><FontAwesomeIcon className="text-dark" icon={faStar} /> 4 </RBS.Badge> &nbsp; &nbsp;
                    </div>
                    <div className="clearfix" />
                    <div className="businessInfo">
                      <small><FontAwesomeIcon icon={faPhoneAlt} /> : 9975463675 | <FontAwesomeIcon icon={faEnvelope} /> : rfAndDecor@gmail.com | <b>Distance :</b> 5 Km</small>
                    </div>
                  </RBS.Col>
                  <RBS.Col md={2} className="businessListAct">
                    <RBS.Button block variant="outline-primary" size="sm"  onClick={() => setModalShow(true)} ><FontAwesomeIcon icon={faPhoneAlt} /> Request callback</RBS.Button>
                  </RBS.Col>
                </RBS.Row>
              </div>
            </RBS.Col>
            <RBS.Col md={12} className="mb-1">
              <div className="businessSec">
                <RBS.Row>
                  <RBS.Col md={10}>
                    <div className="businessListNm">Royal Furnitures And Home Decor, Chikhali</div>
                    <div className="clearfix" />
                    <div className="businessGrp">
                      <RBS.Badge pill variant="warning"><FontAwesomeIcon className="text-dark" icon={faStar} /> 5 </RBS.Badge> &nbsp; &nbsp;
                      <RBS.Badge pill variant="dark"><FontAwesomeIcon className="text-warning" icon={faCrown} /> Preimium</RBS.Badge>
                    </div>
                    <div className="clearfix" />
                    <div className="businessInfo">
                      <small><FontAwesomeIcon icon={faPhoneAlt} /> : 9975463675 | <FontAwesomeIcon icon={faEnvelope} /> : rfAndDecor@gmail.com | <b>Distance :</b> 5 Km</small>
                    </div>
                  </RBS.Col>
                  <RBS.Col md={2} className="businessListAct">
                    <RBS.Button block variant="outline-primary" size="sm"  onClick={() => setModalShow(true)} ><FontAwesomeIcon icon={faPhoneAlt} /> Request callback</RBS.Button>
                  </RBS.Col>
                </RBS.Row>
              </div>
            </RBS.Col>
            <RBS.Col md={12} className="mb-1">
              <div className="businessSec">
                <RBS.Row>
                  <RBS.Col md={10}>
                    <div className="businessListNm">Jagdamba Home Decore, Jadhavwadi</div>
                    <div className="clearfix" />
                    <div className="businessGrp">
                      <RBS.Badge pill variant="warning"><FontAwesomeIcon className="text-dark" icon={faStar} /> 5 </RBS.Badge> &nbsp; &nbsp;
                      <RBS.Badge pill variant="dark"><FontAwesomeIcon className="text-warning" icon={faCrown} /> Preimium</RBS.Badge>
                    </div>
                    <div className="clearfix" />
                    <div className="businessInfo">
                      <small><FontAwesomeIcon icon={faPhoneAlt} /> : 9975463675 | <FontAwesomeIcon icon={faEnvelope} /> : rfAndDecor@gmail.com | <b>Distance :</b> 5 Km</small>
                    </div>
                  </RBS.Col>
                  <RBS.Col md={2} className="businessListAct">
                    <RBS.Button block variant="outline-primary" size="sm"  onClick={() => setModalShow(true)} ><FontAwesomeIcon icon={faPhoneAlt} /> Request callback</RBS.Button>
                  </RBS.Col>
                </RBS.Row>
              </div>
            </RBS.Col>
            <RBS.Col md={12} className="mb-1">
              <div className="businessSec">
                <RBS.Row>
                  <RBS.Col md={10}>
                    <div className="businessListNm"> WoodBlocks Furniture Studio, Jadhavwadi</div>
                    <div className="clearfix" />
                    <div className="businessGrp">
                      <RBS.Badge pill variant="warning"><FontAwesomeIcon className="text-dark" icon={faStar} /> 5 </RBS.Badge> &nbsp; &nbsp;
                      <RBS.Badge pill variant="dark"><FontAwesomeIcon className="text-warning" icon={faCrown} /> Preimium</RBS.Badge>
                    </div>
                    <div className="clearfix" />
                    <div className="businessInfo">
                      <small><FontAwesomeIcon icon={faPhoneAlt} /> : 9975463675 | <FontAwesomeIcon icon={faEnvelope} /> : rfAndDecor@gmail.com | <b>Distance :</b> 5 Km</small>
                    </div>
                  </RBS.Col>
                  <RBS.Col md={2} className="businessListAct">
                    <RBS.Button block variant="outline-primary" size="sm"  onClick={() => setModalShow(true)} ><FontAwesomeIcon icon={faPhoneAlt} /> Request callback</RBS.Button>
                  </RBS.Col>
                </RBS.Row>
              </div>
            </RBS.Col>
            <RBS.Col md={12} className="mb-1">
              <div className="businessSec">
                <RBS.Row>
                  <RBS.Col md={10}>
                    <div className="businessListNm"> Rajveer Home furnituees, Jadhavwadi</div>
                    <div className="clearfix" />
                    <div className="businessGrp">
                      <RBS.Badge pill variant="warning"><FontAwesomeIcon className="text-dark" icon={faStar} /> 4 </RBS.Badge> &nbsp; &nbsp;
                    </div>
                    <div className="clearfix" />
                    <div className="businessInfo">
                      <small><FontAwesomeIcon icon={faPhoneAlt} /> : 9975463675 | <FontAwesomeIcon icon={faEnvelope} /> : rfAndDecor@gmail.com | <b>Distance :</b> 5 Km</small>
                    </div>
                  </RBS.Col>
                  <RBS.Col md={2} className="businessListAct">
                    <RBS.Button block variant="outline-primary" size="sm"  onClick={() => setModalShow(true)} ><FontAwesomeIcon icon={faPhoneAlt} /> Request callback</RBS.Button>
                  </RBS.Col>
                </RBS.Row>
              </div>
            </RBS.Col>

          </RBS.Row>
        </RBS.Col>
      </RBS.Row>
    </RBS.Container>
    <div>
      <CallbackRequest show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  </div>;
}

BusinessSearch.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  businessSearch: makeSelectBusinessSearch(),
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

export default compose(withConnect)(BusinessSearch);
