import React from 'react';

export default class Countries extends React.Component {

  render() {
    // console.log('countries Component: ',this.props.countries.countries);
    return (
      <div className="col-lg-2 col-md-4 col-sm-4 col-xs-4 innerWraper" style={{height:screen.height+'px'}}>
          { this.props.countries.countries.map( (country,index)=>{
            return(
              <div key={index} className="col-lg-12 row dataRow" 
                               onClick={()=> this.props.getCountryNews({'countryName' : country.name, 'newsSrc' : '', 'newsSrcName' : ''})}>
                <div className="col-lg-5"><img className="img-responsive flagImg" src={country.flag}/></div>
                <div className="col-lg-7">{country.name}</div>
              </div>
              );
            }) 
          }
      </div>
    );
  }
}

