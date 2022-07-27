const fs = require("fs")
const path = require("path")
const Ajv = require("ajv")
const standaloneCode = require("ajv/dist/standalone").default

console.log('Starting schema generation...')

const schema = {
    type: "object",
    properties: {
        container_name: { type: "string" },
        category: { type: "array" },
        registry_url: { type: "string" },
        description: { type: "string" },
        registry: { type: "string" },
        pull_count: { type: "integer" },
        layer_count: { type: "integer" },
        package_count: { type: "integer" },
        volunerability_count: { type: "integer" },
        file_size: { type: "integer" },
        logo_path: { type: "string" },
        layer_summary: { type: "array" },
        vulns_severity_count: { type: "object" },
        pakage_by_licenses: { type: "object" }
    },
    required: ["container_name", "registry_url", "registry", "pull_count", "layer_count", "package_count", "volunerability_count", "file_size", "logo_path"],
}

// The generated code will have a default export:
// `module.exports = <validateFunctionCode>;module.exports.default = <validateFunctionCode>;`
const ajv = new Ajv({code: {source: true}})
const validate = ajv.compile(schema)
let moduleCode = standaloneCode(ajv, validate)

// Now you can write the module code to file
fs.writeFileSync(path.join(__dirname, "../consume/validate-cjs.js"), moduleCode)

console.log('Wrote generated schema to validate-cjs.js')
