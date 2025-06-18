import os
import vertexai

from dotenv import load_dotenv
from vertexai import agent_engines

load_dotenv()

vertexai.init(
    project=os.getenv("PROJECT"),               
    location=os.getenv("LOCATION"),
    staging_bucket=os.getenv("STAGING_BUCKET"),
)

def get_exchange_rate(
    currency_from: str = "USD",
    currency_to: str = "EUR",
    currency_date: str = "latest",
):
    """Retrieves the exchange rate between two currencies on a specified date."""
    import requests

    response = requests.get(
        f"https://api.frankfurter.app/{currency_date}",
        params={"from": currency_from, "to": currency_to},
    )
    return response.json()


agent = agent_engines.LanggraphAgent(
    model=os.getenv("MODEL"),
    tools=[get_exchange_rate],
    model_kwargs={
        "temperature": 0.28,
        "max_output_tokens": 1000,
        "top_p": 0.95,
    },
)


response = agent.query(input={"messages": [
    ("user", "What's the exchange rate from US dollars to Swedish currency?"),
]})

print(response)
