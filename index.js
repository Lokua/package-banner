/*!
 * package-header - version 1.0.0 (built: 2015-10-24)
 *
 *   Generate a header/banner doc comment from your package.json
 *
 * git: https://github.com/lokua/package-header.git
 * Copyright © 2015, Joshua Kleckner aka Lokua <dev@lokua.net> (http://lokua.net)
 * License: MIT
 */

const date = new Date().toISOString().slice(0, 10);
const cw = String.fromCharCode(169);

exports.build = (conf) => `/*!
 * ${conf.name} - version ${conf.version} (built: ${date})
 *
 *   ${conf.description}
 *
 * ${conf.repository.type}: ${conf.repository.url.replace('git+', '')}
 * Copyright ${cw} ${date.slice(0,4)}, ${conf.author}
 * License: ${conf.license}
 */
`;

exports.min = (conf) =>
  `/*! ${conf.name} v${conf.version} | ${cw} ${date.slice(0,4)} ${conf.author} | ${conf.license} */`;
;
