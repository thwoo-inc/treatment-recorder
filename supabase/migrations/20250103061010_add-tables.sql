-- 治療テンプレート
CREATE TABLE treatment_templates (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    symptom TEXT NOT NULL,
    procedures JSONB NOT NULL,
    created_at TIMESTAMP DEFAULT now()
);

ALTER TABLE treatment_templates ENABLE ROW LEVEL SECURITY;
CREATE POLICY permit_public_read ON treatment_templates FOR SELECT USING (TRUE);
CREATE POLICY permit_public_update ON treatment_templates FOR UPDATE USING (TRUE);

-- 治療
CREATE TABLE treatments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    symptom TEXT NOT NULL,
    label TEXT NOT NULL,
    procedures JSONB,
    created_at TIMESTAMP DEFAULT now(),
    treatment_started_at TIMESTAMP,
    treatment_finished_at TIMESTAMP
);

ALTER TABLE treatments ENABLE ROW LEVEL SECURITY;
CREATE POLICY permit_public_read ON treatments FOR SELECT USING (TRUE);
CREATE POLICY permit_public_update ON treatments FOR UPDATE USING (TRUE);
