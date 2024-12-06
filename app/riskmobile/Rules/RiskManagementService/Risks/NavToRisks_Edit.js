export default function NavToEdit(clientAPI) {
    if (clientAPI.getODataProvider('/riskmobile/Services/RiskManagementService.service').isDraftEnabled('Risks')) {
        return clientAPI.executeAction({
            'Name': '/riskmobile/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Risks'
                },
                'OnSuccess': '/riskmobile/Actions/RiskManagementService/Risks/NavToRisks_Edit.action'
            }
        });
    } else {
        return clientAPI.executeAction('/riskmobile/Actions/RiskManagementService/Risks/NavToRisks_Edit.action');
    }
}