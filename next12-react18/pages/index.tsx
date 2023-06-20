/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import layout from '../src/app/layout';

export default function App({assets}) {
  const components = [];

  for (let i = 0; i <= 1000; i++) {
    components.push(<HeavyComponent />);
  }

  return (
      <layout assets={assets} title="Hello">
        <h1>Next 12 React 18</h1>
        {components}
      </layout>
  );
}

function HeavyComponent() {
  return (
      <>
        <ul>
          <li>
            <a href="#">Link</a>
          </li>
          <li>
            <a href="#">Link</a>
          </li>
          <li>
            <a href="#">Link</a>
          </li>
          <li>
            <a href="#">Link</a>
          </li>
          <li>
            <a href="#">Link</a>
          </li>
        </ul>
        <article>
          <h1>Title</h1>
          <p>Content</p>
          <div>
            <div>
              <div>
                <div>
                  <div>12345</div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </>
  );
}
