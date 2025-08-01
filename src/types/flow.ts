
export interface NodeConfig {
  prompt?: string;
  model?: string;
  temperature?: number;
  initialState?: string;
  destination?: string;
  template?: string;
  url?: string;
  rules?: any[];
  conditions?: Array<{ name: string; expression: string }> | string;
  inputs?: string[];
  outputs?: string[];
  inputVars?: string[];
  outputVars?: string[];
  toolName?: string;
  params?: string;
  ruleSetName?: string;
  outputType?: string;
  targetUrl?: string;
  sendVars?: string[];
}

export interface NodeData extends Record<string, unknown> {
  label: string;
  config?: NodeConfig;
  isExecuting?: boolean;
  hasViolation?: boolean;
}

export interface FlowNode {
  id: string;
  type: string;
  position: { x: number; y: number };
  data: NodeData;
}

export interface ConstitutionRule {
  id: string;
  name: string;
  description: string;
  type: 'keyword' | 'regex' | 'custom' | 'ai_safety';
  pattern?: string;
  keywords?: string[];
  severity: 'block' | 'warn' | 'flag';
  message: string;
  enabled: boolean;
  appliesTo: string[];
  createdAt: string;
  updatedAt: string;
}

export interface ConstitutionSet {
  id: string;
  name: string;
  description: string;
  rules: ConstitutionRule[];
  isDefault: boolean;
  createdAt: string;
  updatedAt: string;
}
