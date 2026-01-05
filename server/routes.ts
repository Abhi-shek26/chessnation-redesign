import type { Express } from "express";
import { setupAuth, registerAuthRoutes } from "./replit_integrations/auth";

export async function registerRoutes(app: Express): Promise<void> {
  await setupAuth(app);
  registerAuthRoutes(app);
}
