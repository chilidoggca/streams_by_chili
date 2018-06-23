import React from 'react';

function HomePage (props) {
  return (
    <main
      className='HomePage'
      style={{padding: '60px 20px 20px'}}
    >
      <div className="welcome" style={{position: 'absolute',
        top: '50%', right: '50px', paddingLeft: '100px', textAlign: 'right'
      }}>
        <h1 style={{display: 'inline-block', color: 'rgba(0,0,0,0.8)'}}>
          <span style={{fontSize: '0.8em'}}>Welcome to</span>
          <span style={{fontSize: '1.25em'}}> Streams </span>
        </h1>
        <span style={{fontSize: '2em', whiteSpace: 'nowrap'}}>&nbsp;
          <svg viewBox="0 0 200 40" style={{width: '200px', position: 'relative', bottom: '-10px'}}>
            <defs>
              <mask id="bychili" x="0" y="0" width="200" height="40">
                <rect x="0" y="0" width="200" height="40" fill="#ffffff"/>
                <text textAnchor="middle" x="100" y="29" letterSpacing="10">
                  by CHILI
                </text>
              </mask>
            </defs>
            <rect x="0" y="0" width="200" height="40" mask="url(#bychili)" fillOpacity="0.8"/>
          </svg>
        </span>
      </div>
      <div style={{background: 'url("pixels2.png") repeat scroll left top',
        zIndex: '-19', position: 'absolute', top: '0',
        left: '0', width: '100%', height: '100%'
      }}>
        &nbsp;
      </div>
      <div style={{background: 'url("leagueoflegends.jpg")',
        backgroundPosition: '50% 50%', backgroundSize: 'cover',
        zIndex: '-20', position: 'absolute', top: '0',
        left: '0', width: '100%', height: '100%', opacity: '0.75'
      }}>
        &nbsp;
      </div>
      <div style={{backgroundColor: '#7FFFD4', zIndex: '-21',
        position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'
      }}>
        &nbsp;
      </div>
    </main>
  );
}

export {HomePage};
