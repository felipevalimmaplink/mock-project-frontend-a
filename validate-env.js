const required = ["DUMMY_VAR_1", "DUMMY_VAR_2"];
let missing = [];

for (const key of required) {
  if (!process.env[key]) {
    missing.push(key);
  }
}

if (missing.length > 0) {
  console.error(`❌ Missing required environment variables: ${missing.join(", ")}`);
  process.exit(1);
} else {
  console.log("✅ All required env vars are set at build time.");
}
