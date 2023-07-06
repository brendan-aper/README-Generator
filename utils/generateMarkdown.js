const dayjs = require('dayjs')

function renderLicenseBadge(license) {
    let licenseBadge = "";
  
    switch (license) {
      case "MIT":
        licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
        break;
      case "Apache 2.0":
        licenseBadge = "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
        break;
      case "GPLv2":
        licenseBadge = "[![License: GPLv2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)]";
        break;
      case "BSD 3-Clause":
        licenseBadge = "[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]";
        break;
      case "Unlicense":
        licenseBadge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]";
        break;
      default:
        break;
    }
  
    return licenseBadge;
  }



function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      licenseLink = "(https://opensource.org/licenses/MIT)";
      break;
    case "Apache 2.0":
      licenseLink = "(https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GPLv2":
      licenseLink = "(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
      break;
    case "BSD 3-Clause":
      licenseLink = "(https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "Unlicense":
      licenseLink = "(http://unlicense.org/)";
      break;
    default:
      break;
  }

  return licenseLink;
}


function renderLicenseSection(license) {
  switch (license) {
    case "MIT":
      licenseSection = "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: <br> <br> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. <br> <br> THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.";
      break;
    case "Apache 2.0":
      licenseSection = "Licensed under the Apache License, Version 2.0 (the 'License');<br>you may not use this file except in compliance with the License.<br>You may obtain a copy of the License at:<br><br>[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)<br><br>Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.";
      break;
    case "GPLv2":
      licenseSection = "This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version.<br><br>This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.<br><br>You should have received a copy of the GNU General Public License along with this program; if not, write to the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.";
      break;
    case "BSD 3-Clause":
      licenseSection = "Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:<br><br>1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.<br><br>2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.<br><br>3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.<br><br>THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS “AS IS” AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.";
      break;
    case "Unlicense":
      licenseSection = "N/A";
      break;
    default:
      break;
  }

  return licenseSection;
}

function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Table of Contents
  - [Description](#Description)
  - [Usage](#Usage)
  - [Contributions](#Contributions)
  - [Installation](#Installation)
  - [Test](#Test)
  - [Questions](#Questions)
  - [License](#License)
  
  <a id="Description"></a>
  ## Description
  ${data.description}

  <a id="Usage"></a>
  ## Usage
  ${data.usage}

  <a id="Installation"></a>
  ## Installation
  ${data.install}

  <a id="Contributions></a>
  ## Contributions
  ${data.contribute}

  <a id="Test"></a>
  ## Test
  ${data.test}

  <a id="Questions"></a>
  ## Questions
  If there are any questions, or you need to contact me feel free to follow the links below.
  ${data.email}\n
  [github](github.com/${data.github})

  <a id="License"></a>
  ## License
  
  ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}
  \n
  \n
  Copyright (c) ${dayjs().format('YYYY')} ${data.name} \n
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
