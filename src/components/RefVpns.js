import React from "react";

// CSS style
import './RefVpns.css';

const RefVpns = (options) => {
    return (
        <React.Fragment>
            <div className='RefVpns'>
                <p>
                    <span>
                        <a href={options?.refUrl} target="_blank" rel="noopener noreferrer">
                            Văn Phẩm Nguồn Sống (vnps.org)
                        </a>
                    </span>
                    <span> / </span>
                    <span>
                        <a href={options?.articleHref} target="_blank" rel="noopener noreferrer">
                            {options?.title || '...'}
                        </a>
                    </span>
                </p>
            </div>
        </React.Fragment>
    );
}
export default RefVpns;