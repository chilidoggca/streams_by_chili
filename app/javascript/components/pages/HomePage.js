import React from 'react';
import {ExternalLinks} from '../ExternalLinks';

function HomePage (props) {
  return (
    <main
      className='HomePage'
      style={{padding: '60px 0'}}
    >
      <div style={{position: 'relative', height: '100%'}}>
      <div className="welcome" style={{position: 'absolute',
        top: '50%', right: '0', paddingLeft: '50px', textAlign: 'right'
      }}>
        <h1 className="no-select" style={{display: 'inline-block',
          color: 'rgba(255,255,255,0.9)', fontWeight: '600'}}>
          <span style={{fontSize: '0.8em'}}>Welcome to</span>
          <span style={{fontSize: '1.25em'}}> Streams </span>
        </h1>
        <span style={{fontSize: '2em', whiteSpace: 'nowrap'}}>&nbsp;
          <svg viewBox="0 0 200 40" style={{width: '200px', position: 'relative', bottom: '-10px'}}>
            <defs>
              <mask id="bychili" x="0" y="0" width="200" height="40">
                <rect x="0" y="0" width="200" height="40" fill="#ffffff"/>
                <text textAnchor="middle" x="100" y="29" letterSpacing="10" fontWeight="600">
                  by CHILI
                </text>
              </mask>
            </defs>
            <rect x="0" y="0" width="200" height="40" mask="url(#bychili)" fill="rgba(255,255,255,0.9)" />
          </svg>
        </span>
        <br />
        <ExternalLinks />
      </div>
      </div>
      <div style={{background: 'url("pixels.png") repeat scroll left top',
        zIndex: '-19', position: 'fixed', top: '0',
        left: '0', width: '100%', height: '100%'
      }}>
        &nbsp;
      </div>
      <div style={{background: 'url("leagueoflegends.jpg")',
        backgroundPosition: '50% 50%', backgroundSize: 'cover',
        zIndex: '-20', position: 'fixed', top: '0',
        left: '0', width: '100%', height: '100%', opacity: '0.75'
      }}>
        &nbsp;
      </div>
      <div style={{backgroundColor: '#7FFFD4', zIndex: '-21',
        position: 'fixed', top: '0', left: '0', width: '100%', height: '100%'
      }}>
        &nbsp;
      </div>
    </main>
  );
}

export {HomePage};
