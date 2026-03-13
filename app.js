
```mermaid
flowchart TD

User --> WebInterface
WebInterface --> ToolCatalog
WebInterface --> AIAgent

AIAgent --> AI_API
ToolCatalog --> Database
```
