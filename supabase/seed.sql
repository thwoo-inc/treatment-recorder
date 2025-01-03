--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1 (Ubuntu 15.1-1.pgdg20.04+1)
-- Dumped by pg_dump version 15.8 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: treatment_templates; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.treatment_templates VALUES ('179050c6-063e-467b-842f-6f87d29db5bd', '死戦期帝王切開', '[{"details": "帝王切開の決断と実施、迅速な準備および娩出後の子宮管理。", "department": "産科"}, {"details": "大出血や弛緩出血への対応、子宮収縮薬の投与や必要に応じた外科的処置。", "department": "産科"}, {"details": "他診療科との連携指示、術野確保や輸血依頼などの要請。", "department": "産科"}, {"details": "気道管理、気管挿管や酸素化・換気のサポート。", "department": "麻酔科"}, {"details": "循環管理と蘇生リード、薬剤投与や血圧・脈拍のモニタリング。", "department": "麻酔科"}, {"details": "必要に応じた麻酔または鎮痛管理。", "department": "麻酔科"}, {"details": "心肺停止時のBLS/ACLS開始、バイタルサインや除細動の管理。", "department": "救急科"}, {"details": "緊急呼集の実施とチーム医療のコーディネート。", "department": "救急科"}, {"details": "母体の外傷やその他の致命的損傷の確認と対応。", "department": "救急科"}, {"details": "新生児蘇生の実施、体温保持と気道確保。", "department": "新生児科"}, {"details": "低酸素や未熟性への対応、NICUでの集中管理。", "department": "新生児科"}, {"details": "迅速な血液製剤の準備、赤血球製剤や新鮮凍結血漿などの供給。", "department": "輸血部"}, {"details": "血算、凝固機能、血液型クロスマッチ検査の迅速実施。", "department": "輸血部"}, {"details": "ECMOやPCPSの適応評価と導入。", "department": "集中治療科"}, {"details": "心機能管理と薬剤調整、昇圧薬や強心薬の投与。", "department": "集中治療科"}, {"details": "術後の集中ケアと母体のバイタル安定化管理。", "department": "集中治療科"}, {"details": "緊急手術室の準備と器材のセッティング。", "department": "看護部"}, {"details": "心肺蘇生の補助、薬剤準備やルート確保の支援。", "department": "看護部"}, {"details": "患者家族への説明と精神的サポート。", "department": "看護部"}, {"details": "救急薬剤（アドレナリン、オキシトシンなど）の迅速供給と管理。", "department": "薬剤部"}]', '2025-01-03 07:22:03.366884');


--
-- Data for Name: treatments; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- PostgreSQL database dump complete
--

