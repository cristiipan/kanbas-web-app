export default function Lab1() {
    return (
      <div id="wd-lab1">
        <h2>Lab 1</h2>
        <h3>HTML Examples</h3>
        <div id="wd-h-tag">
          <h4>Heading Tags</h4>
Text documents are often broken up into several sections and subsections. Each section is usually prefaced with a short title or heading that attempts to summarize the topic of the section it precedes. For instance this paragraph is preceded by the heading Heading Tags. The font of the section headings are usually larger and bolder than their subsection headings. This document uses headings to introduce topics such as HTML Documents, HTML Tags, Heading Tags, etc. HTML heading tags can be used to format plain text so that it renders in a browser as large headings. There are 6 heading tags for different sizes: h1, h2, h3, h4, h5, and h6. Tag h1 is the largest heading and h6 is the smallest heading.
        </div>
        <div id="wd-p-tag">
        <h4>Paragraph Tag</h4>
        <p id="wd-p-1"> ... </p>
        <p id="wd-p-2">
This is the first paragraph. The paragraph tag is used to format
vertical gaps between long pieces of text like this one.
        </p>
        <p id="wd-p-3">
This is the second paragraph. Even though there is a deliberate white
gap between the paragraph above and this paragraph, by default
browsers render them as one contiguous piece of text as shown here on
the right.
        </p>
        <p id="wd-p-4">
This is the third paragraph. Wrap each paragraph with the paragraph
tag to tell browsers to render the gaps.
        </p>
        </div>
        <div id="wd-lists">
        <h4>List Tags</h4>
        <h5>Ordered List Tag</h5>
        How to make pancakes:
        <ol id="wd-pancakes">
            <li>Mix dry ingredients.</li>
            <li>Add wet ingredients.</li>
            <li>Stir to combine.</li>
            <li>Heat a skillet or griddle.</li>
            <li>Pour batter onto the skillet.</li>
            <li>Cook until bubbly on top.</li>
            <li>Flip and cook the other side.</li>
            <li>Serve and enjoy!</li>
        </ol>
        My favorite recipe:
        <ol id="wd-your-favorite-recipe">
            <li>Boil water.</li>
            <li>Add an egg.</li>
            <li>Wait for 8 minutes.</li>
            <li>Serve and enjoy!</li>
         </ol>
         <h5>Unordered List Tag</h5>
        My favorite books (in no particular order)
        <ul id="wd-my-books">
            <li>Dune</li>
            <li>Lord of the Rings</li>
            <li>Ender's Game</li>
            <li>Red Mars</li>
            <li>The Forever War</li>
        </ul>
        Your favorite books (in no particular order)
        <ul id="wd-your-books">
            <li>Little Women</li>
            <li>Harry Potter</li>
            <li>Educated</li>
        </ul>
        </div>
        <div id="wd-tables">
        <h4>Table Tag</h4>
        <table border={1} width="100%">
            <thead>
                <tr>
                <th align="center">Quiz</th>
                <th align="center">Topic</th>
                <th align="center">Date</th>
                <th align="center">Grade</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td align="center">Q1</td>
                <td align="center">HTML</td>
                <td align="center">2/3/21</td>
                <td align="center">85</td>
                </tr>
                <tr>
                <td align="center">Q2</td>
                <td align="center">CSS</td>
                <td align="center">2/10/21</td>
                <td align="center">90</td>
                </tr>
                <tr>
                <td align="center">Q3</td>
                <td align="center">JavaScript</td>
                <td align="center">2/17/21</td>
                <td align="center">95</td>
                </tr>
                <tr>
                <td align="center">Q4</td>
                <td align="center">React</td>
                <td align="center">2/24/21</td>
                <td align="center">88</td>
                </tr>
                <tr>
                <td align="center">Q5</td>
                <td align="center">Node.js</td>
                <td align="center">3/3/21</td>
                <td align="center">92</td>
                </tr>
                <tr>
                <td align="center">Q6</td>
                <td align="center">Express</td>
                <td align="center">3/10/21</td>
                <td align="center">87</td>
                </tr>
                <tr>
                <td align="center">Q7</td>
                <td align="center">MongoDB</td>
                <td align="center">3/17/21</td>
                <td align="center">89</td>
                </tr>
                <tr>
                <td align="center">Q8</td>
                <td align="center">API Design</td>
                <td align="center">3/24/21</td>
                <td align="center">91</td>
                </tr>
                <tr>
                <td align="center">Q9</td>
                <td align="center">Testing</td>
                <td align="center">3/31/21</td>
                <td align="center">94</td>
                </tr>
                <tr>
                <td align="center">Q10</td>
                <td align="center">Deployment</td>
                <td align="center">4/7/21</td>
                <td align="center">93</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                <td colSpan={3} align="center">Average</td>
                <td align="center">90.4</td>
                </tr>
            </tfoot>
        </table>
        <div id="wd-images">
            <h4>Image tag</h4>
            Loading an image from the internet:
            <br />
            <img id="wd-starship"
                width="400px"
            src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
            />
            <br />
            Loading a local image:
            <br />
            <img id="wd-teslabot" src="images/teslabot.jpg" height="200px" />
        </div>
        <div id="wd-forms">
        <h4>Form Elements</h4>
        <form id="wd-text-fields">
            <h5>Text Fields</h5>
            <label htmlFor="wd-text-fields-username">Username:</label>
            <input id="wd-text-fields-username" placeholder="jdoe" /> <br />
            <label htmlFor="wd-text-fields-password">Password:</label>
            <input type="password" id="wd-text-fields-password" value="123@#$asd" />
            <br />
            <label htmlFor="wd-text-fields-first-name">First name:</label>
            <input type="text" id="wd-text-fields-first-name" title="John" /> <br />
            <label htmlFor="wd-text-fields-last-name">Last name:</label>
            <input type="text" id="wd-text-fields-last-name" placeholder="Doe"
            value="Wonderland" title="The last name" />
        </form>
        </div>
        <h5>Text boxes</h5>
        <label>Biography:</label><br/>
        <textarea id="wd-textarea" cols={30} rows={10}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</textarea>
        <h5 id="wd-buttons">Buttons</h5>
        <button id="wd-all-good" onClick={() => alert("Life is Good!")} type="button">
            Hello World!
        </button>
        <h5>File upload</h5>
        <input id="wd-upload" type="file"/>
        <h5 id="wd-radio-buttons">Radio buttons</h5>

        <label>Favorite movie genre:</label><br />

        <input type="radio" name="radio-genre" id="wd-radio-comedy"/>
        <label htmlFor="wd-radio-comedy">Comedy</label><br />

        <input type="radio" name="radio-genre" id="wd-radio-drama"/>
        <label htmlFor="wd-radio-drama">Drama</label><br />

        <input type="radio" name="radio-genre" id="wd-radio-scifi"/>
        <label htmlFor="wd-radio-scifi">Science Fiction</label><br />

        <input type="radio" name="radio-genre" id="wd-radio-fantasy"/>
        <label htmlFor="wd-radio-fantasy">Fantasy</label>

        <h4 id="wd-dropdowns">Dropdowns</h4>

        <h5>Select one</h5>
        <label htmlFor="wd-select-one-genre"> Favorite movie genre: </label><br/>
        <select id="wd-select-one-genre">
        <option value="COMEDY">Comedy</option>
        <option value="DRAMA">Drama</option>
        <option selected value="SCIFI">
            Science Fiction</option>
        <option value="FANTASY">Fantasy</option>
        </select>

        <h5>Select many</h5>
        <label htmlFor="wd-select-many-genre"> Favorite movie genres: </label><br/>
        <select id="wd-select-many-genre" multiple>
        <option selected value="COMEDY">Comedy</option>
        <option value="DRAMA">Drama</option>
        <option selected value="SCIFI">
            Science Fiction</option>
        <option value="FANTASY">Fantasy</option>
        </select>

        <h4>Other HTML field types</h4>

        <label htmlFor="wd-text-fields-email"> Email: </label>
        <input type="email"
            placeholder="jdoe@somewhere.com"
            id="wd-text-fields-email"/><br/>

        <label htmlFor="wd-text-fields-salary-start"> Starting salary:
        </label>
        <input type="number"
            id="wd-text-fields-salary-start"
            placeholder="1000"
            value="100000"/><br/>

        <label htmlFor="wd-text-fields-rating"> Rating: </label>
        <input type="range" id="wd-text-fields-rating"
            placeholder="Doe"
            max="5"
            value="4"/><br/>

        <label htmlFor="wd-text-fields-dob"> Date of birth: </label>
        <input type="date"
            id="wd-text-fields-dob"
            value="2000-01-21"/><br/>

        <h4>Anchor tag</h4>
        Please
        <a id="wd-lipsum" href="https://www.lipsum.com">click here</a>
        to get dummy text<br/>
        
      </div>
    </div>
    );
  }
  