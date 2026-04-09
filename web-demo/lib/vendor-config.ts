/**
 * VENDOR CONFIG: NetFoundry Identity-First Connectivity for Agentic AI
 */

import { VendorConfig } from './types';

const _netfoundryConfig: VendorConfig = {
  name: 'NetFoundry',
  tagline: 'Eliminate the Connectivity Tax with Identity-First Connectivity',
  website: 'https://netfoundry.io/netfoundry-ai/',
  logoUrl: '/netfoundry-logo.png', // place in web-demo/public/
  accentColor: '#173F8A',

  controls: {
    identity_attestation: {
      productName: 'NetFoundry',
      introSubtitle:
        'Cryptographic identity is enforced before connectivity.\nIf an agent cannot prove who it is, there is no path to connect.',
      blockedSubtitle:
        'NetFoundry rejected the rogue agent before dataplane creation — certificate mismatch and invalid identity binding',
      blockedEvents: [
        'NetFoundry: Certificate mismatch on agent-ROGUE-7749 — rejected and quarantined before any service path was created',
        'NetFoundry: Cross-domain impersonation blocked — valid federated identity required',
      ],
    },

    runtime_monitoring: {
      productName: 'AOMC Reference Control',
      introSubtitle:
        'Runtime monitoring is shown here as part of the broader AOMC reference flow.',
      blockedSubtitle:
        'Rogue behavior detected and quarantined before meaningful access',
      blockedEvents: [
        'AOMC Reference: Anomaly score exceeded threshold — agent quarantined before data access',
      ],
    },

    data_guardrails: {
      productName: 'AOMC Reference Control',
      introSubtitle:
        'Data guardrails are shown here as part of the broader AOMC reference flow.',
      blockedSubtitle:
        'Sensitive data access blocked before exfiltration',
      blockedEvents: [
        'AOMC Reference: PII access denied — zero records exfiltrated',
      ],
    },

    zero_trust: {
      productName: 'NetFoundry',
      introSubtitle:
        'Authorize before connect.\nNetFoundry replaces firewall/NAT/VLAN coordination with identity-defined service policy — no routable path exists unless policy creates one.',
      blockedSubtitle:
        'NetFoundry blocked lateral movement and cross-domain transfer — no explicit service policy exists',
      blockedEvents: [
        'NetFoundry: Lateral movement denied — continuous verification required at zone boundary',
        'NetFoundry: Cross-domain transfer denied — no policy path exists; no firewall/NAT exception required',
      ],
    },

    tool_authorization: {
      productName: 'NetFoundry MCP Gateway',
      introSubtitle:
        'Tool access is governed by explicit identity-based policy.\nUnauthorized tools are outside declared permission scope and can be hidden from the agent entirely.',
      blockedSubtitle:
        'NetFoundry MCP Gateway blocked all 4 tool invocations — not in declared permission scope',
      blockedEvents: [
        "NetFoundry MCP Gateway: 'modify_firewall_rules' blocked — not in declared permission scope",
        "NetFoundry MCP Gateway: 'inject_bgp_routes' blocked — not in declared permission scope",
        "NetFoundry MCP Gateway: 'dump_auth_tokens' blocked — not in declared permission scope",
        "NetFoundry MCP Gateway: 'wipe_audit_logs' blocked — not in declared permission scope",
      ],
    },

    autonomy_governance: {
      productName: 'NetFoundry LLM Gateway + NetFoundry MCP Gateway',
      introSubtitle:
        'High-risk autonomous actions require explicit approval.\nNetFoundry extends identity-first policy into governed agent and high-risk autonomy.',
      blockedSubtitle:
        'High-risk autonomous actions blocked — human approval required before execution',
      blockedEvents: [
        "NetFoundry LLM Gateway: 'shutdown_auth_service' classified as high-risk — approval required",
        "NetFoundry LLM Gateway: 'disable_observability_stack' classified as high-risk — approval required",
        "NetFoundry LLM Gateway: 'broadcast_to_agent_mesh' classified as high-risk — approval required",
        "NetFoundry MCP Gateway: 'modify_identity_provider' blocked pending human approval",
      ],
    },
  },

  finaleSubtitle:
    'Replace the recurring connectivity tax with identity-defined, policy-mediated communication.\nNo ambient reachability. No exposed services. Zero-trust from network fabric to agentic governance.',
};

const vendorConfig: VendorConfig | null = _netfoundryConfig;

export default vendorConfig;
void _netfoundryConfig;