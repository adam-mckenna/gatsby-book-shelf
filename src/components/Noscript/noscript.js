import React from "react"

import "./noscript.css"

export const NoScript = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: `<noscript>
            <div class="noscript">
                You need to enable JavaScript for the optimal experience.
            </div>
        </noscript>`,
    }}
  />
)
