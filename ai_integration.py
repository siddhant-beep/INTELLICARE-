import requests

def analyze_symptoms(symptoms):
    # Replace 'your_api_key' and 'your_endpoint' with actual values
    api_key = 'your_api_key'
    endpoint = 'https://api.gemini.ai/analyze'

    headers = {
        'Authorization': f'Bearer {api_key}',
        'Content-Type': 'application/json'
    }

    data = {
        'symptoms': symptoms
    }

    response = requests.post(endpoint, headers=headers, json=data)

    if response.status_code == 200:
        return response.json()
    else:
        return {'error': 'Failed to analyze symptoms'}

# Example usage
symptoms = ['fever', 'cough', 'headache']
analysis_result = analyze_symptoms(symptoms)
print(analysis_result)