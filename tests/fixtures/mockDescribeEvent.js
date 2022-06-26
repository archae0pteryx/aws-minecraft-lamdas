const MOCK_DESCRIBE_EVENT = {
  Reservations: [
    {
      Groups: [],
      Instances: [
        {
          AmiLaunchIndex: 0,
          ImageId: 'ami-098e42ae54c764c35',
          InstanceId: 'i-0f6488be699b82289',
          InstanceType: 't2.small',
          KeyName: 'aws-minecraft',
          LaunchTime: '2022-06-25T02:25:23.000Z',
          Monitoring: {
            State: 'disabled',
          },
          Placement: {
            AvailabilityZone: 'us-west-2c',
            GroupName: '',
            Tenancy: 'default',
          },
          PrivateDnsName: 'ip-172-31-2-36.us-west-2.compute.internal',
          PrivateIpAddress: '172.31.2.36',
          ProductCodes: [],
          PublicDnsName: 'ec2-35-84-216-99.us-west-2.compute.amazonaws.com',
          PublicIpAddress: '35.84.216.99',
          State: {
            Code: 16,
            Name: 'running',
          },
          StateTransitionReason: '',
          SubnetId: 'subnet-fa78f9a1',
          VpcId: 'vpc-ca805eac',
          Architecture: 'x86_64',
          BlockDeviceMappings: [
            {
              DeviceName: '/dev/xvda',
              Ebs: {
                AttachTime: '2022-06-23T01:45:45.000Z',
                DeleteOnTermination: true,
                Status: 'attached',
                VolumeId: 'vol-0b391357de800af0f',
              },
            },
          ],
          ClientToken: '',
          EbsOptimized: false,
          EnaSupport: true,
          Hypervisor: 'xen',
          ElasticGpuAssociations: [],
          ElasticInferenceAcceleratorAssociations: [],
          NetworkInterfaces: [
            {
              Association: {
                IpOwnerId: '259562322670',
                PublicDnsName:
                  'ec2-35-84-216-99.us-west-2.compute.amazonaws.com',
                PublicIp: '35.84.216.99',
              },
              Attachment: {
                AttachTime: '2022-06-23T01:45:44.000Z',
                AttachmentId: 'eni-attach-0b3eebc741d93ffe6',
                DeleteOnTermination: true,
                DeviceIndex: 0,
                Status: 'attached',
                NetworkCardIndex: 0,
              },
              Description: '',
              Groups: [
                {
                  GroupName: 'launch-wizard-1',
                  GroupId: 'sg-051e59ba6af46df19',
                },
              ],
              Ipv6Addresses: [],
              MacAddress: '0a:ba:89:a8:12:a3',
              NetworkInterfaceId: 'eni-05690278496691a70',
              OwnerId: '259562322670',
              PrivateDnsName: 'ip-172-31-2-36.us-west-2.compute.internal',
              PrivateIpAddress: '172.31.2.36',
              PrivateIpAddresses: [
                {
                  Association: {
                    IpOwnerId: '259562322670',
                    PublicDnsName:
                      'ec2-35-84-216-99.us-west-2.compute.amazonaws.com',
                    PublicIp: '35.84.216.99',
                  },
                  Primary: true,
                  PrivateDnsName: 'ip-172-31-2-36.us-west-2.compute.internal',
                  PrivateIpAddress: '172.31.2.36',
                },
              ],
              SourceDestCheck: true,
              Status: 'in-use',
              SubnetId: 'subnet-fa78f9a1',
              VpcId: 'vpc-ca805eac',
              InterfaceType: 'interface',
              Ipv4Prefixes: [],
              Ipv6Prefixes: [],
            },
          ],
          RootDeviceName: '/dev/xvda',
          RootDeviceType: 'ebs',
          SecurityGroups: [
            {
              GroupName: 'launch-wizard-1',
              GroupId: 'sg-051e59ba6af46df19',
            },
          ],
          SourceDestCheck: true,
          Tags: [
            {
              Key: 'Name',
              Value: 'minecraft',
            },
          ],
          VirtualizationType: 'hvm',
          CpuOptions: {
            CoreCount: 1,
            ThreadsPerCore: 1,
          },
          CapacityReservationSpecification: {
            CapacityReservationPreference: 'open',
          },
          HibernationOptions: {
            Configured: false,
          },
          Licenses: [],
          MetadataOptions: {
            State: 'applied',
            HttpTokens: 'optional',
            HttpPutResponseHopLimit: 1,
            HttpEndpoint: 'enabled',
            HttpProtocolIpv6: 'disabled',
            InstanceMetadataTags: 'disabled',
          },
          EnclaveOptions: {
            Enabled: false,
          },
          PlatformDetails: 'Linux/UNIX',
          UsageOperation: 'RunInstances',
          UsageOperationUpdateTime: '2022-06-23T01:45:44.000Z',
          PrivateDnsNameOptions: {
            HostnameType: 'ip-name',
            EnableResourceNameDnsARecord: true,
            EnableResourceNameDnsAAAARecord: false,
          },
        },
      ],
      OwnerId: '259562322670',
      ReservationId: 'r-02b51f87436da5296',
    },
  ],
}

module.exports = { MOCK_DESCRIBE_EVENT }
