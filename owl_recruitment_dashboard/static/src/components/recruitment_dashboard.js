/** @odoo-module */

import { registry } from "@web/core/registry";
import { RecruitmentChart } from "./recruitment_chart/recruitment_chart";
import { RecruitmentKpi } from "./recruitment_kpi/recruitment_kpi";

export class OwlRecruitmentDashboard extends owl.Component {}

OwlRecruitmentDashboard.template = "owl.OwlRecruitmentDashboard";
OwlRecruitmentDashboard.components = { RecruitmentChart, RecruitmentKpi };

registry.category("actions").add("owl.recruitment_dashboard", OwlRecruitmentDashboard);
